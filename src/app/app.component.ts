import { Component } from "@angular/core"


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <main class="main">
  <div class="content">
    <div class="left-side">
      <app-sidebar />
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
}
