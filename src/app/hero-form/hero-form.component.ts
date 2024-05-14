import { Component } from '@angular/core';
import { Hero } from '../hero'
import { DbService } from "../db.service"
import { ActivatedRoute, ParamMap } from "@angular/router"


@Component({
  selector: 'app-hero-form',
  standalone: false,
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})

export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model: any = {}
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private dbService: DbService
  ) {
  }

  onSubmit() {
    const heroes = this.dbService.sendData(this.model)
      .then((heroes) => {

        this.submitted = true;
        alert('success')
      })
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      const id = params['id?']
      if (id) {
        this.dbService.getData()
          .then(heroes => {
            const hero = heroes.find(hero => +hero.id === +id)
            if (hero) {
              this.model = hero
            } else {
              this.model = new Hero(heroes.length + 1, '', this.powers[0], '')
            }
          })
      }
    })
  }



}
