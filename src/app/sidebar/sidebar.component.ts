import { Component } from '@angular/core';
import {Routes, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routes: Routes = []

  constructor(private router: Router) {
    this.routes = this.router.config
      this.routes.unshift({
        path: '',
        title: 'Home',
      })
  }
}
