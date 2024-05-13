import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbService } from "../db.service"
import { Hero } from "../hero"

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  heroes: Hero[] = [];

  title = 'angular-form';

  constructor(private dbService: DbService) {
    dbService.getData().then(data => this.heroes = data)
  }
}
