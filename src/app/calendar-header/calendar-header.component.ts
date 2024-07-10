import { NgFor, CommonModule } from "@angular/common";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { uk } from 'date-fns/locale'
import { format } from "date-fns";



@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
  ],
  template: `
    <div class="header-wrapper">
      <div class="year-selector">
        <button type="button" (click)="onMinusYear()">
            <span class="material-symbols-outlined chevron">
                chevron_left
            </span>
        </button>
        <span class="current-year">{{ currentYear }}</span>
        <button type="button" (click)="onPlusYear()">
          <span class="material-symbols-outlined chevron">
              chevron_right
          </span>
        </button>
      </div>
      
      <div class="months-wrapper">
        <button *ngFor="let month of months" [ngClass]="getMonthClass(month)" (click)="onSetCurrentMonth(month)">
          {{ getMonthName(month) }}
        </button>
      </div>
    </div>
  `,
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent {
  months: number[] = [...Array(12).keys()]

  @Input() currentYear!: number
  @Input() currentMonth!: number

  @Output() minusYear = new EventEmitter()
  @Output() plusYear = new EventEmitter()
  @Output() setCurrentMonth = new EventEmitter<number>()

  onMinusYear() {
    this.minusYear.emit()
  }

  onPlusYear() {
    this.plusYear.emit()
  }

  onSetCurrentMonth(month: number) {
    this.setCurrentMonth.emit(month)
  }

  getMonthClass(month: number) {
    return {
      'month-button': true,
      'active': month === this.currentMonth
    }
  }

  getMonthName (month: number) {
    const date = new Date();
    date.setMonth(month);
    return format(new Date(date), "LLLL", { locale: uk });
  }
}
