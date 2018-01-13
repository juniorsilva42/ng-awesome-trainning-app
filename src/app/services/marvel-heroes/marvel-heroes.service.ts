import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class MarvelHeroesService {
    
    private heroesWhere = {
        limit: 50,
        pubKey: '18e1cf2f44fa3f3dae9eb8c6b4347f3f',
        privKey: '358a1810ff6589feb270218d03af96e52c0843df',
    }
    private md5: any;
    private timestamp: number;
    private hash: any;
    public data: any;

    constructor(public http: Http) { 

        this.md5 = new Md5();
        this.timestamp = Number(new Date);
        this.hash = Md5.hashStr(`${this.timestamp}${this.heroesWhere.privKey}${this.heroesWhere.pubKey}`);
    }

    getHeroes (){

        if(this.data)
            return Promise.resolve(this.data);
        
        return new Promise((resolve, reject) => {

            this.http.
                get(
                    `https://gateway.marvel.com:443/v1/public/characters?ts=${this.timestamp}&orderBy=name&limit=${this.heroesWhere.limit}&apikey=${this.heroesWhere.pubKey}&hash=${this.hash}`
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
                    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${this.timestamp}&orderBy=name&limit=30&apikey=${this.heroesWhere.pubKey}&hash=${this.hash}`
                )
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

}
