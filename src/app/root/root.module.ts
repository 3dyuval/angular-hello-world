import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from "./root.component"
import { RouterOutlet } from "@angular/router"
import { SidebarModule } from "../sidebar/sidebar.module";
import { DbService } from "../db.service"


@NgModule({
    declarations: [
      RootComponent
    ],
    imports: [
      CommonModule,
      RouterOutlet,
      SidebarModule
    ],
  }
)

export class RootModule {
}
