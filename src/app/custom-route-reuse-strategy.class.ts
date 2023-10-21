import { Injectable, effect, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';
import { RouteCloseService } from './services/route-close.service';

@Injectable({
  providedIn: 'root',
})
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  constructor() {
    effect(() => {
      if (this.routeCloseService.deleteRoute().routeLink) {
        this.storedRoutes[
          this.routeCloseService.deleteRoute().routeLink!
        ].componentRef.destroy();

        delete this.storedRoutes[
          this.routeCloseService.deleteRoute().routeLink!
        ];
      }
    });
  }

  routeCloseService: RouteCloseService = inject(RouteCloseService);

  storedRoutes: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {
    this.storedRoutes[route.url.toString()] = detachedTree;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.storedRoutes[route.url.toString()];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRoutes[route.url.toString()];
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
