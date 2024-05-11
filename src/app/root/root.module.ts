import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from "./root.component"
import {RouterOutlet} from "@angular/router"
import {SidebarModule} from "../sidebar/sidebar.module";


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarModule
  ]})

export class RootModule {
}
