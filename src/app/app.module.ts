import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule as AppRootModule } from "./root/root.module"
import { HeroFormModule } from "./hero-form/hero-form.module"
import { provideRouter, RouterModule } from "@angular/router"
import { routes } from "./app.routes"
import { RootComponent} from "./root/root.component"
import { BrowserModule } from '@angular/platform-browser'
import {SidebarModule} from "./sidebar/sidebar.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [RootComponent],
})
export class AppModule {

}
