/**
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/* global importScripts, cacheManifest, clients */
importScripts('{{ "/devsummit/static/scripts/cache-manifest.js" | add_hash }}');
importScripts('{{ "/devsummit/static/scripts/analytics.js" | add_hash }}');

self.analytics.trackingId = 'UA-41980257-1';

const NAME = 'CDS';
const VERSION = '{{ version }}';

self.oninstall = evt => {
  const urls = cacheManifest.map(url => {
    return new Request(url, {credentials: 'include'});
  });

  evt.waitUntil(
    caches
      .open(NAME + '-v' + VERSION)
      .then(cache => {
        return cache.addAll(urls);
      }));

  self.skipWaiting();
};

self.onactivate = _ => {
  const currentCacheName = NAME + '-v' + VERSION;
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        if (cacheName.indexOf(NAME) === -1) {
          return null;
        }

        if (cacheName !== currentCacheName) {
          return caches.delete(cacheName);
        }

        return null;
      })
    );
  });

  self.clients.claim();
};

self.onmessage = evt => {
  if (evt.data === 'version') {
    evt.source.postMessage({
      version: VERSION
    });
  }
};

self.onpush = evt => {
  const title = 'Chrome Dev Summit';
  const msg = {
    body: evt.data.text(),
    icon: '/devsummit/static/images/icons/cds-icon@512.png',
    vibrate: [200]
  };

  evt.waitUntil(
      caches.match('{{ "/devsummit/static/json/sessions.json" | add_hash }}')
        .then(response => response.json())
        .then(sessions => {
          const session = evt.data.text();
          Object.keys(sessions).forEach(date => {
            Object.keys(sessions[date]).forEach(daySession => {
              let sessionDetails = sessions[date][daySession];
              if (sessionDetails.url === session) {
                msg.body = sessionDetails.name + ' with ' +
                    sessionDetails.speaker + ' is starting now.';
                msg.icon = sessionDetails.speakerImg;
              }
            });
          });

          return caches.match(msg.icon)
              .then(r => r.blob())
              .then(imgBlob => {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.addEventListener('load', _ => {
                    resolve(reader.result);
                  });
                  reader.addEventListener('error', reject);
                  reader.readAsDataURL(imgBlob);
                });
              })
              .then(imgBase64 => {
                msg.icon = imgBase64;
                const pushValue = msg.body.indexOf('/devsummit/') === 0 ?
                    msg.body :
                    'Event update';

                return Promise.all([
                  self.registration.showNotification(title, msg),
                  self.analytics.trackEvent('push-received', pushValue)
                ]);
              });
        }));
};

self.onnotificationclose = evt => {
  evt.waitUntil(
    Promise.all([
      self.analytics.trackEvent('notification-close')
    ])
  );
};

self.onnotificationclick = evt => {
  const url = 'https://developer.chrome.com/devsummit/';

  // Android doesn't close the notification when you click it
  // See http://crbug.com/463146
  evt.notification.close();

  // Check if there's already a tab open with this URL.
  // If yes: focus on the tab.
  // If no: open a tab with the URL.
  evt.waitUntil(
    Promise.all([
      clients.matchAll({
        type: 'window'
      })
      .then(windowClients => {
        const client = windowClients.find(client => {
          return (client.url === url && 'focus' in client);
        });

        if (client) {
          client.focus();
        } else if (clients.openWindow) {
          return clients.openWindow(url);
        }
      }),

      self.analytics.trackEvent('notification-click')
    ])
  );
};

self.onfetch = evt => {
  const cacheName = NAME + '-v' + VERSION;
  const remapRequestIfNeeded = request => {
    return new Promise((resolve, reject) => {
      if (request.url.endsWith('@1x.jpg')) {
        return resolve(request.url.replace(/@1x\.jpg/, '@1.5x.jpg'));
      }

      if (!request.url.endsWith('/devsummit/')) {
        return resolve(request);
      }

      caches.match('{{ "/devsummit/static/json/sessions.json" | add_hash }}')
          .then(sessions => sessions.json())
          .then(sessions => {
            const DAY_LENGTH_MS = 86400000;   // 24 hours
            const PST_ADJUSTMENT = 28800000;  // 8 hours
            const today = Date.now();

            Object.keys(sessions).forEach((day, index) => {
              // Date.parse of 2016-11-10 will assume UTC, which is good here.
              const confDay = Date.parse(day);
              const normalizedConfDay =
                  (today - confDay - PST_ADJUSTMENT) / DAY_LENGTH_MS;

              // If the value is between 0 and 1, then we're on the day of the
              // conference. Worth noting that we're adjusting by PST to ensure
              // that we don't switch days based on midnight UTC but rather PST.
              if (normalizedConfDay > 0 && normalizedConfDay < 1) {
                if (index === 0) {
                  resolve('/devsummit/live-day-1?partial');
                } else if (index === 1) {
                  resolve('/devsummit/live-day-2?partial');
                }
              } else if (normalizedConfDay > 1) {
                resolve('/devsummit/over')
              }
            });

            resolve('/devsummit/home');
          })
          .catch(_ => {
            // On failure to get the sessions info, just fall back to the
            // standard home page.
            resolve('/devsummit/home');
          });
    });
  };

  evt.respondWith(
    remapRequestIfNeeded(evt.request)
    .then(request => caches.match(request, {cacheName}))
    .then(response => {
      if (response) {
        return response;
      }

      const request = evt.request;
      return fetch(request).then(fetchResponse => {
        // Never cache Analytics, Conversion or Push requests.
        if (/google/.test(request.url) || /cds-push/.test(request.url)) {
          return fetchResponse;
        }

        // Cache for next time.
        return caches.open(NAME + '-v' + VERSION).then(cache => {
          return cache.put(request.clone(), fetchResponse.clone());
        }).then(_ => {
          return fetchResponse;
        });
      }, err => {
        console.warn(`Unable to fetch ${evt.request.url}.`);
        console.warn(err.stack);
        return new Response('Unable to fetch.');
      });
    })
  );
};
