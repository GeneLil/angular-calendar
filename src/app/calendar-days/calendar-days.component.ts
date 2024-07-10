import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from "@angular/common";
import {format} from "date-fns";
import { uk } from 'date-fns/locale'

@Component({
  selector: 'app-calendar-days',
  standalone: true,
  imports: [
      NgFor,
      CommonModule,
  ],
  template: `
    <div class="weekdays-wrapper">
      <div *ngFor="let day of getWeekDays()" [ngClass]="getWeekDayClass(day.dayNumber)">{{ day.dayName }}</div>
    </div>
    <div class="days-wrapper">
      <div *ngFor="let day of getOrderedDays()" [ngClass]="getDayClass(day)">{{ day }}</div>
    </div>
  `,
  styleUrl: './calendar-days.component.css'
})
export class CalendarDaysComponent {
  @Input() daysInMonth!: number
  @Input() currentYear!: number
  @Input() currentMonth!: number

  getOrderedDays() {
    return [...Array(this.daysInMonth).keys(), this.daysInMonth].slice(1)
  }

  getWeekDays() {
    const orderedDays = this.getOrderedDays()
    return orderedDays.map(day => ({
      dayNumber: day,
      dayName: format(new Date(this.currentYear, this.currentMonth, day), "eeeeee", { locale: uk })
    }))
  }

  getWeekDayClass(day: number) {
    const weekends = [0, 6]
    const isWeekend = weekends.includes(new Date(this.currentYear, this.currentMonth, day).getDay())
    return {
      'weekday-cell': true,
      'weekend': isWeekend,
    }
  }

  getDayClass(day: number) {
    const weekends = [0, 6]
    const isWeekend = weekends.includes(new Date(this.currentYear, this.currentMonth, day).getDay())
    return {
      'day-cell': true,
      'weekend': isWeekend,
    }
  }
}
