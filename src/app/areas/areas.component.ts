import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import type { Area } from "../area/area"
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuid4 } from "uuid";
import { AreaComponent } from "../area/area.component";

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AreaComponent,
  ],
  template: `
    <div *ngIf="!areThereNoAreas()" class="areas-list">
      <app-area *ngFor="let area of areas" [area]="area"></app-area>
    </div>
    <div *ngIf="areThereNoAreas()">Ще не існує жодного майданчика, створіть перший!</div>
    <form [formGroup]="newArea" (submit)="addNewArea()" class="form">
      <div class="max-w-sm">
        <label for="name" class="block text-sm font-medium mb-2">Назва</label>
        <input type="text" id="name" formControlName="name" class="input-text py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="">
      </div>
      <div class="max-w-sm">
        <label for="address" class="block text-sm font-medium mb-2">Адреса</label>
        <input type="text" id="address" formControlName="address" class="input-text py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="">
      </div>
      <button type="submit" class="submit-btn py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        Створити
      </button>
    </form>
  `,
  styleUrl: './areas.component.css'
})
export class AreasComponent {
  areas: Area[] = []

  newArea = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  })

  addNewArea() {
    const areaToAdd = { id: uuid4(), name: this.newArea.value.name || "", address: this.newArea.value.address || "" }
    this.areas = [...this.areas, areaToAdd]
    this.newArea.reset()
  }

  areThereNoAreas() {
    return this.areas.length === 0
  }
}
