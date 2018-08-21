import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LandingComponent,
  AboutMeComponent,
  ItComponent,
  PhysicsComponent,
  MediaComponent,
  SelfEducationComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'it',
    component: ItComponent
  },
  {
    path: 'physics',
    component: PhysicsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'self-education',
    component: SelfEducationComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled'
});
