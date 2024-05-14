import { Component } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { DbService } from "../db.service"


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routes: Routes = []

  constructor(
    private router: Router,
    private dbService: DbService
  ) {
    this.routes = this.router.config.filter(route => !route.path?.includes(':'))
  }

  async ngOnInit() {
    const heroes = await this.dbService.getData()
    this.routes.push(...heroes.map(hero => ({
        path: `hero-form/${hero.id}`,
        title: hero.name
      })))
  }
}
