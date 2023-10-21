import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HlmButtonDirective],
  template: `
    <img
      class="w-24 self-center mb-10"
      src="https://cdn-images-1.medium.com/max/132/1*m5dED78KPVxOauwGUpi_0A@2x.png"
      alt="ngTurkey Logo"
    />

    <ng-container *ngFor="let nav of navService.navItems">
      <span
        (click)="navService.handleNavigation(nav)"
        class="flex items-center px-4 py-2.5 text-zinc-900 rounded-lg hover:bg-zinc-200 mt-2"
        [ngClass]="
          nav.navLink === navService.activeRoute() ? 'bg-zinc-200' : ''
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-4"
        >
          <path
            *ngIf="nav.navLink === 'a-page'"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
          <path
            *ngIf="nav.navLink === 'b-page'"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>

        <span>
          {{ nav.navName }}
        </span>
      </span>
    </ng-container>
  `,
  styles: [],
})
export class SidebarComponent {
  navService: NavService = inject(NavService);
}
