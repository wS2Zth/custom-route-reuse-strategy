import { Route } from '@angular/router';
import { APageComponent } from './pages/a-page/a-page.component';
import { BPageComponent } from './pages/b-page/b-page.component';

export const appRoutes: Route[] = [
  {
    path: 'a-page',
    component: APageComponent,
  },
  {
    path: 'b-page',
    component: BPageComponent,
  },
];
