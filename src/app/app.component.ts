import { Component, Input } from "@angular/core"
import { Hero } from "./hero"
import { DbService } from "./db.service"


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <main class="main">
  <div class="content">
    <div class="left-side">
      <app-sidebar [title]="title" />
      {{ hero$ }}
    </div>
    <div class="divider" role="separator" aria-label="Divider"></div>
    <div class="right-side">
      <router-outlet />
    </div>
  </div>
</main>`
})
export class AppComponent {
  title = 'app';
  hero$: Hero | undefined;

 @Input()
  set id(id: string) {
   console.log(id)
  }

  constructor(private dbService: DbService) {
  }

}
