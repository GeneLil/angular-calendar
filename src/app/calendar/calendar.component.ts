import { Component, } from '@angular/core';
import { CalendarHeaderComponent } from "../calendar-header/calendar-header.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CalendarHeaderComponent,
  ],
  template: `<app-calendar-header [currentYear]="currentYear"></app-calendar-header>`,
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentYear: number = new Date().getFullYear()
}
