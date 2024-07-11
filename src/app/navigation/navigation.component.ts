import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  template: `
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0">
          <a [ngClass]="getLinkClasses('/')" [routerLink]="['/']" aria-current="page">Календар</a>
          <a [ngClass]="getLinkClasses('/areas')" [routerLink]="['/areas']">Майданчики</a>
          <a [ngClass]="getLinkClasses('/exhibitions')" [routerLink]="['/exhibitions']">Виставки</a>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  currentUrl: string = ""

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects
      }
    })
  }

  getLinkClasses(url: string) {
    return {
      'font-medium text-blue-500': url === this.currentUrl,
      'font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500': url !== this.currentUrl,
    }
  }
}
