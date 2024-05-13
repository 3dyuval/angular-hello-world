import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroFormComponent} from "./hero-form.component";
import {FormsModule} from "@angular/forms";
import { DbService } from "../db.service"



@NgModule({
  declarations: [HeroFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [DbService]
})
export class HeroFormModule { }
