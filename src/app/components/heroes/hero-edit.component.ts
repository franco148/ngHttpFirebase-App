import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  isNew:boolean = false;
  heroKey:string;

  constructor(private _heroService: HeroesService,
              private router: Router,
              private routing: ActivatedRoute) {
    this.routing.params.subscribe(params=>{
      this.heroKey = params['id'];

      // if (this.heroKey == "new") {
      //     this.isNew = true;
      // } else {
      //   this.isNew = false;
      // }
    });
 }

  ngOnInit() {
  }


  // saveHero() {
  //   console.log(this.hero);
  //   //If I leave this without a subscribe. this is not going to be fired.
  //   //It means, will not be saved in the database.
  //   this._heroService.postNewHero(this.hero)
  //       .subscribe(data => {
  //         this.router.navigate(['/hero', data.name]);
  //       },
  //       error => console.log(error));
  // }

  saveHero() {

    if (this.heroKey == "new") {
      this._heroService.postNewHero(this.hero)
          .subscribe(data => {
            this.router.navigate(['/hero', data.name]);
          },
          error => console.log(error));
    } else {
      this._heroService.udpateHero(this.hero, this.heroKey)
          .subscribe(data => {
            console.log(data);
          },
          error => console.log(error));
    }
  }

}
