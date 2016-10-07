import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app.component';
import { LoginComponent }  from '../modules/authenticate/components/login.component';
import { SignupComponent }  from '../modules/authenticate/components/signup.component';
import { MenuComponent }  from '../modules/menu/components/menu.component';
import { OrderComponent }  from '../modules/order/components/order.component';


const appRoutes: Routes = [
  { path: 'signin', component: LoginComponent }, 
  /*{ path: 'menu', component: MenuComponent },
  { path: 'menu/:customerId/:venueId', component: MenuComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'signup/:id', component: SignupComponent }, */
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: '**', redirectTo: '/signin' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
