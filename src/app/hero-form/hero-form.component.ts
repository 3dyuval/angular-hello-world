import { Component, Input } from '@angular/core';
import { Hero } from '../hero'
import { DbService } from "../db.service"
import { ActivatedRoute } from "@angular/router"
import { map } from "rxjs"


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
      })
  }

  id$ = this.route.params.pipe(map(params => params['id?']))

  /*
  https://dev.to/this-is-angular/bind-route-info-to-component-inputs-new-router-feature-35ll

         We can use the same name as the query param, for example 'query'
         Example url: http://localhost:4200/search?heroId=Angular
     */
  // @Input() heroId?: string; // we can use the same name as the query param

  /*
      Or we can use a different name, for example 'id', and then we can use the @Input('id')
      Example url: http://localhost:4200/search?id=123
  */
  @Input('id?') heroId?: string; // we can also use a different name

  ngOnInit() {
    console.log('id$:', this.id$);
    console.log('id?:', this.heroId);

    // this.route.params.subscribe((params) => {
    // const id = params['id?']
    this.id$.subscribe((id: string | null) => {
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
