import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { LoginComponent } from './pages/login/login.component';

export const  routes: Routes = [
    { path: '', component: Page1Component },
    { path: 'login', component: LoginComponent },
  ];