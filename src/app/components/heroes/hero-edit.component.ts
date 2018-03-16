import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../../interfaces/hero.interface';

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

  constructor() { }

  ngOnInit() {
  }


  saveHero() {
    console.log(this.hero);
  }

}
