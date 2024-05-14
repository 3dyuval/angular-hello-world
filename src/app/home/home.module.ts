import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component"
import { RouterOutlet } from "@angular/router"
import { SidebarModule } from "../sidebar/sidebar.module";
import { DbService } from "../db.service"


@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      RouterOutlet,
    ],
  }
)

export class HomeModule {
}
