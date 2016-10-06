import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../components/app.component';
import { LoginComponent }  from '../components/user/login.component';
import { SignupComponent }  from '../components/user/signup.component';
import { MenuComponent }  from '../components/menu/menu.component';
import { OrderComponent }  from '../components/order/order.component';

const heroesRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'signup/:id', component: SignupComponent }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
