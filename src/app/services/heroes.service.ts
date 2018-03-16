import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = "https://ngheroesfirebase.firebaseio.com/heroes.json";

  constructor(private http:Http) { }

  postNewHero(hero: Hero) {
    let body = JSON.stringify(hero);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // for third parameter would be { headers: headers} but in ES6 when
    // we have same name, we do not need to specify the type.
    return this.http.post(this.heroesURL, body, { headers })
               .map(response => {
                 console.log(response.json());
                 return response.json();
               });
  }

}
