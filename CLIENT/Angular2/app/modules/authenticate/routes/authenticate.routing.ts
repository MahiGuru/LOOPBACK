import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateComponent }  from '../authenticate.component'; 
import { LoginComponent }  from '../components/login.component';
import { SignupComponent }  from '../components/signup.component';
import { MenuComponent }  from '../../menu/components/menu.component';
import { OrderComponent }  from '../../order/components/order.component';

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
