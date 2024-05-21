import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule as AppRootModule } from "./home/home.module"
import { HeroFormModule } from "./hero-form/hero-form.module"
import { provideRouter, RouterModule, withComponentInputBinding, withRouterConfig } from "@angular/router"
import { routes } from "./app.routes"
import { AppComponent } from "./app.component"
import { BrowserModule } from '@angular/platform-browser'
import {SidebarModule} from "./sidebar/sidebar.module";
import { DbService } from "./db.service"
import { SidebarComponent } from "./sidebar/sidebar.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SidebarModule,
  ],
  providers: [provideRouter(routes,  withRouterConfig({
    paramsInheritanceStrategy: 'always',
  }), withComponentInputBinding()), DbService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {

}
