import { ApplicationConfig } from '@angular/core';
import {
  RouteReuseStrategy,
  Router,
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.class';
import { NavService } from './services/nav.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
  ],
};
