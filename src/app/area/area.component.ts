import { Component, Input } from '@angular/core';
import type { Area } from "./area";

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">
          {{ area.name }}
        </h3>
        <p class="mt-1 text-gray-500">
          {{ area.address }}
        </p>
      </div>
    </div>
  `,
  styleUrl: './area.component.css'
})
export class AreaComponent {
  @Input() area!: Area
}
