import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateComponent }  from '../modules/authenticate/authenticate.component'; 
import { LoginComponent }  from '../modules/authenticate/components/login.component';
import { SignupComponent }  from '../modules/authenticate/components/signup.component';
import { MenuComponent }  from '../modules/menu/components/menu.component';
import { OrderComponent }  from '../modules/order/components/order.component';

const heroesRoutes: Routes = [
  { path: 'login',  component: AuthenticateComponent,
  	children: [
        {
            path: ':id',
            component: SignupComponent
          },
          {
            path: '',
            component: LoginComponent
          } 
      
    ]
	},
  { path: 'signup/:id', component: SignupComponent }

];

export const authRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
