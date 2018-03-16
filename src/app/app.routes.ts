import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroEditComponent } from './components/heroes/hero-edit.component';

const APP_ROUTES: Routes = [
  { path: 'horoes', component: HeroesComponent },
  { path: 'horoe/:id', component: HeroEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'horoes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
