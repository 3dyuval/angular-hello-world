import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule as AppRootModule } from "./app/app.module"
import { HeroFormModule } from "./hero-form/hero-form.module"
import { provideRouter, RouterModule } from "@angular/router"
import { routes } from "./app.routes"
import { AppComponent} from "./app/app.component"


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeroFormModule,
    AppRootModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {

}
