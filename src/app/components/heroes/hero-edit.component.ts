import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Hero } from '../../interfaces/hero.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styles: []
})
export class HeroEditComponent implements OnInit {

  hero:Hero = {
    name: "",
    biography: "",
    comeFrom: ""
  }

  constructor(private _heroService: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }


  saveHero() {
    console.log(this.hero);
    //If I leave this without a subscribe. this is not going to be fired.
    //It means, will not be saved in the database.
    this._heroService.postNewHero(this.hero)
        .subscribe(data => {
          this.router.navigate(['/hero', data.name]);
        },
        error => console.log(error));
  }

}
