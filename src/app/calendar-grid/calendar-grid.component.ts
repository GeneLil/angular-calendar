import { Component, Input } from '@angular/core';
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { NgFor, CommonModule } from "@angular/common";

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
  ],
  template: `
    <div class="grid-wrapper">
      <div class="grid-row">
        <div *ngFor="let day of getOrderedDays()" [ngClass]="getDayClass(day)"></div>
      </div>
    </div>
  `,
  styleUrl: './calendar-grid.component.css'
})
export class CalendarGridComponent {
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

  getDayClass(day: number) {
    const weekends = [0, 6]
    const isWeekend = weekends.includes(new Date(this.currentYear, this.currentMonth, day).getDay())
    return {
      'grid-cell': true,
      'weekend': isWeekend,
    }
  }
}
