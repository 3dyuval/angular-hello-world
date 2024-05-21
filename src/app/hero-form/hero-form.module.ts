import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroFormComponent} from "./hero-form.component";
import {FormsModule} from "@angular/forms";
import { DbService } from "../db.service"
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [HeroFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
  ],
})
export class HeroFormModule { }
