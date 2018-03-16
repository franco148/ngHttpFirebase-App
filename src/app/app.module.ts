import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

//Services
import { HeroesService } from './services/heroes.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroEditComponent } from './components/heroes/hero-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
