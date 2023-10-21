import { Injectable, Signal, inject, signal } from '@angular/core';
import { NavItem } from '../types/nav-item.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouteCloseService } from './route-close.service';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  router: Router = inject(Router);
  routeCloseService: RouteCloseService = inject(RouteCloseService);
  firstCheckForRoute = false;
  navItems: NavItem[] = [
    {
      navLink: 'a-page',
      navName: 'A Page',
    },
    {
      navLink: 'b-page',
      navName: 'B Page',
    },
  ];

  activeRoute = toSignal<string>(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      tap((e) => {
        if (!this.firstCheckForRoute) {
          const activeRoute = (e as NavigationEnd).url.replace('/', '');
          const activeItem = this.navItems.find(
            (x) => x.navLink === activeRoute
          );
          if (activeItem) {
            this.addToActiveRoutes(activeItem);
          }
          this.firstCheckForRoute = true;
        }
      }),
      map((w) => (w as NavigationEnd).url.replace('/', ''))
    )
  );

  activeRoutes = signal<NavItem[]>([]);

  handleNavigation(navItem: NavItem): void {
    this.addToActiveRoutes(navItem);
    this.router.navigateByUrl(navItem.navLink);
  }

  addToActiveRoutes(navItem: NavItem): void {
    if (this.activeRoutes().indexOf(navItem) === -1) {
      this.activeRoutes.update((val) => {
        val.push(navItem);
        return val;
      });
    }
  }

  closeNavigation(navItem: NavItem): void {
    const deletedItemIndex = this.activeRoutes().indexOf(navItem);
    this.activeRoutes.update((val) => {
      val.splice(deletedItemIndex, 1);
      return val;
    });
    if (this.activeRoute() === navItem.navLink) {
      const willNavigateItem =
        this.activeRoutes().length > 0
          ? this.activeRoutes()[deletedItemIndex] ||
            this.activeRoutes()[deletedItemIndex - 1]
          : null;
      willNavigateItem
        ? this.router.navigateByUrl(willNavigateItem.navLink)
        : this.router.navigateByUrl('');
    }
    this.routeCloseService.deleteStoredRoute(navItem.navLink);
  }
}
