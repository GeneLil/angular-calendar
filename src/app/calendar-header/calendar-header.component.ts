import { NgFor, CommonModule } from "@angular/common";
import { Component, Input } from '@angular/core';
import { uk } from 'date-fns/locale'
import { DateFnsModule } from 'ngx-date-fns';
import { format } from "date-fns";

const getMonthName = (month: number) => {
  const date = new Date();
  date.setMonth(month);
  return format(new Date(date), "LLLL", { locale: uk });
}

@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [
    DateFnsModule,
    NgFor,
    CommonModule,
  ],
  template: `
    <div>
      <div>{{ currentYear }}</div>
      <div>
        <span *ngFor="let month of months">{{ month }}</span>
      </div>
    </div>
  `,
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent {
  months: string[] = [...Array(12).keys()]
      .map(monthNum => getMonthName(monthNum))
  @Input() currentYear!: number

}
