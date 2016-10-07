import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateComponent }  from '../authenticate.component';
import { LoginComponent }  from '../components/login.component';
import { SignupComponent }  from '../components/signup.component';
import { MenuComponent }  from '../../menu/components/menu.component';
import { OrderComponent }  from '../../order/components/order.component';

import { AuthGuardService } from "../services/auth-guard.service";

const authRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'auth', component: AuthenticateComponent,
        children: [
            {
                path: "",
                component: LoginComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                children: [
                    {
                        path: '',
                        component: SignupComponent
                    },
                    {
                        path: ':id',
                        component: SignupComponent,
                       // canActivate: [AuthGuardService],
                    }
                ]
            }

        ]
    }

];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
