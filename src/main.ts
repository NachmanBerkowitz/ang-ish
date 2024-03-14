import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a [routerLink]="'/app-test'">
      Learn more about Angular
    </a>
    <router-outlet></router-outlet>
  `,
  imports: [RouterLink, RouterOutlet]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,
  {
    providers: [
      provideRouter(
        [
          {
            path: 'app-test',
            loadComponent: () => import('./test')
          }
        ]
      )
    ]
  }
);
