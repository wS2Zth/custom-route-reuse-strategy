import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../services/nav.service';
import { NavItem } from '../../types/nav-item.type';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  BrnTabsComponent,
  BrnTabsContentDirective,
  BrnTabsListComponent,
  BrnTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-brain';
import {
  HlmTabsContentDirective,
  HlmTabsListDirective,
  HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'app-active-routes',
  standalone: true,
  imports: [
    CommonModule,
    BrnTabsComponent,
    BrnTabsContentDirective,
    BrnTabsListComponent,
    BrnTabsTriggerDirective,
    HlmTabsContentDirective,
    HlmTabsListDirective,
    HlmTabsTriggerDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmBadgeDirective,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <brn-tabs [value]="navService.activeRoute()!">
      <brn-tabs-list
        *ngIf="navService.activeRoutes().length > 0"
        hlmTabsList
        class="flex justify-start w-full bg-gray-100"
        aria-label="tabs example"
      >
        <ng-container *ngFor="let navItem of navService.activeRoutes()">
          <button
            hlmTabsTrigger
            [brnTabsTrigger]="navItem.navLink"
            [routerLink]="navItem.navLink"
          >
            {{ navItem.navName }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-3"
              (click)="
                $event.stopPropagation(); navService.closeNavigation(navItem)
              "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </ng-container>
      </brn-tabs-list>
    </brn-tabs>
  `,
  styles: [],
})
export class ActiveRoutesComponent {
  navService: NavService = inject(NavService);
}
