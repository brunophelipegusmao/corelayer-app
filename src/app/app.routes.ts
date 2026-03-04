import { Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio/portfolio-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
