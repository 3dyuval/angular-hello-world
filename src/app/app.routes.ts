import { Routes } from '@angular/router';
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { HomeComponent } from './home/home.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'new-hero',
    title: 'New Hero',
    redirectTo: 'hero-form/'
  },
  {
    path: 'hero-form/:id?',
    component: HeroFormComponent,
    title: 'Hero Form'
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent,
    title: 'Multi select material'
  }
];
