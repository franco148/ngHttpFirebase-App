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

  constructor(private _heroService: HeroesService) {
    this._heroService.getHeroes().subscribe(data => {
      // console.log(data);
      this.heroes = data;
    });
  }

  ngOnInit() {
  }

}
