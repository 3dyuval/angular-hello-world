import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbService } from "../db.service"
import { Hero } from "../hero"

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroes: Hero[] = [];

  title = 'angular-form';

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.dbService.getData().then((data: Hero[]) => this.heroes = data)
  }
}
