import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CalendarComponent,
    NavigationComponent,
    RouterModule,
  ],
  template: `<main>
    <app-navigation></app-navigation>
    <div class="page-wrap">
      <router-outlet></router-outlet>  
    </div>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Events';
}
