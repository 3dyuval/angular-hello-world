import { Component } from '@angular/core';
import { Hero } from '../hero'
import { DbService } from "../db.service"

@Component({
  selector: 'app-hero-form',
  standalone: false,
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

  constructor(private dbService: DbService){

  }

    onSubmit() {
        const heroes = this.dbService.sendData(this.model)
          .then((heroes) => {

          this.submitted = true;
          alert('success')
        })
    }
}
