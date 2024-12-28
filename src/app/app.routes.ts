import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Home Page',
  },
];
