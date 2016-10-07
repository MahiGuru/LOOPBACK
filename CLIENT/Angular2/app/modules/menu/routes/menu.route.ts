import { RouterModule, Routes } from '@angular/router';

import { AuthenticateComponent } from "../../authenticate/authenticate.component";
import { MenuComponent } from "../components/menu.component";
import { MenuDashboardComponent } from "../components/menu-dashboard.component";

import { MenuGuardService } from "../services/menu-guard.service"


const menu_routes: Routes = [
    {
        path: 'menu',
        component: AuthenticateComponent,
        children: [
            { path: "", component: MenuComponent },
            {
                path: ":menuid/:userid",
                component: MenuDashboardComponent,
                canActivate: [MenuGuardService]
            }
        ]
    },
];

export const menu_routing = RouterModule.forChild(menu_routes);