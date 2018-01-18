import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelHeroesService {

    private initialRequest = {
        requestUrl: 'https://gateway.marvel.com:443/v1/public/characters',
        params: {
            limit: 100,
            pubKey: '18e1cf2f44fa3f3dae9eb8c6b4347f3f',
            privKey: '358a1810ff6589feb270218d03af96e52c0843df'
        }
    }
    
    private md5: any;
    private timestamp: number;
    private hash: any;
    public data: any;

    constructor(public http: Http) {

        this.md5 = new Md5();
        this.timestamp = Number(new Date);
        this.hash = Md5.hashStr(`${this.timestamp}${this.initialRequest.params.privKey}${this.initialRequest.params.pubKey}`);
    }

    getHeroes() {

        if (this.data)
            return Promise.resolve(this.data);
        

        return new Promise((resolve, reject) => {

            this.http.
                get(
                    `${this.initialRequest.requestUrl}?ts=${this.timestamp}&limit=${this.initialRequest.params.limit}&apikey=${this.initialRequest.params.pubKey}&hash=${this.hash}`
                )
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getInfoHeroes(id: number){
        
        return new Promise(resolve => {
            
            this.http
                .get(
                    `${this.initialRequest.requestUrl}/${id}?ts=${this.timestamp}&orderBy=name&limit=30&apikey=${this.initialRequest.params.pubKey}&hash=${this.hash}`
                )
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

}
