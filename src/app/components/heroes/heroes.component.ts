import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];
  isLoading:boolean = true;

  constructor(private _heroService: HeroesService) {
    this._heroService.getHeroes().subscribe(data => {
      // console.log(data);
      this.heroes = data;
      this.isLoading = false;
    });
  }

  ngOnInit() {
  }

  removeHero(key$:string) {

    this._heroService.removeHero(key$)
        .subscribe(response => {
          if (response) {
              console.log(response);
          } else {
            //All is ok - according firebase documentation
            //At the first time this throws an exception. So that is because the array
            //was updated (pipe does not know about it). We need to fix that.
            // pure: false
            //That is to be aware on changes.
            delete this.heroes[key$];
          }
        });
  }

}
