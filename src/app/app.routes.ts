import {Routes} from '@angular/router';
import {HeroFormComponent} from "./hero-form/hero-form.component";
import {RootComponent} from './root/root.component';

export const routes: Routes = [
  {
    path: 'hero-form',
    component: HeroFormComponent,
    title: 'Hero Form'
  },
];
