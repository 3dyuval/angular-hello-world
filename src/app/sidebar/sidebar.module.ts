import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./sidebar.component";
import {routes} from '../app.routes'
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SidebarModule {
}
