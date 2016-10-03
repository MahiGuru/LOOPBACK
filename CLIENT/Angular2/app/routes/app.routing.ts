import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../components/app.component';
import { LoginComponent }  from '../components/user/login.component';
import { SignupComponent }  from '../components/user/signup.component';
import { MenuComponent }  from '../components/menu/menu.component';
import { OrderComponent }  from '../components/order/order.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:customerId/:venueId', component: MenuComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'signup/:id', component: SignupComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
