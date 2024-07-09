import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CalendarComponent,
  ],
  template: `<main>
    <app-calendar></app-calendar>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Events';
}
