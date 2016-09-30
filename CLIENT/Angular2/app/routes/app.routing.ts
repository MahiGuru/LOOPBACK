import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../components/app.component';
import { LoginComponent }  from '../components/login.component';
import { MenuComponent }  from '../components/menu.component';
import { OrderComponent }  from '../components/order.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrderComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  /*{ path: 'menu', component: MenuComponent },
  {
    path: 'customers',
    component: CustomerComponent,
    data: {
      title: 'Customers List'
    }
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }*/
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
