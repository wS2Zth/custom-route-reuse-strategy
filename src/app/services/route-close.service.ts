import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteCloseService {
  deleteRoute = signal<{ routeLink: string | null }>({ routeLink: null });
  deleteStoredRoute(routeLink: string) {
    this.deleteRoute.update((val) => ({ routeLink }));
  }
}
