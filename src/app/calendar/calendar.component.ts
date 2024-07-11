import { Component, } from '@angular/core';
import { CalendarHeaderComponent } from "../calendar-header/calendar-header.component";
import { CalendarDaysComponent } from "../calendar-days/calendar-days.component";
import { CalendarGridComponent } from "../calendar-grid/calendar-grid.component";
import { getDaysInMonth } from "date-fns";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CalendarHeaderComponent,
    CalendarDaysComponent,
    CalendarGridComponent,
  ],
  template: `<div>
    <app-calendar-header 
      [currentYear]="currentYear" 
      [currentMonth]="currentMonth"
      (minusYear)="minusYear()" 
      (plusYear)="plusYear()"
      (setCurrentMonth)="setCurrentMonth($event)"
    ></app-calendar-header>
    <app-calendar-days 
        [daysInMonth]="daysInMonth" 
        [currentYear]="currentYear"
        [currentMonth]="currentMonth"
    ></app-calendar-days>
    <app-calendar-grid
        [daysInMonth]="daysInMonth"
        [currentYear]="currentYear"
        [currentMonth]="currentMonth"
    ></app-calendar-grid>
  </div>`,
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentYear: number = new Date().getFullYear()
  currentMonth: number = 0
  daysInMonth: number = getDaysInMonth(new Date(this.currentYear, this.currentMonth))

  minusYear() {
    this.currentYear = this.currentYear - 1
    this.daysInMonth = getDaysInMonth(new Date(this.currentYear, this.currentMonth))
  }

  plusYear() {
    this.currentYear = this.currentYear + 1
    this.daysInMonth = getDaysInMonth(new Date(this.currentYear, this.currentMonth))
  }

  setCurrentMonth(month: number) {
    this.currentMonth = month
    this.daysInMonth = getDaysInMonth(new Date(this.currentYear, month))
  }
}
