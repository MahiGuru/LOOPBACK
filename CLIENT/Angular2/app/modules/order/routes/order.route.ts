import { RouterModule, Routes } from '@angular/router';

import { AuthenticateComponent } from "../../authenticate/authenticate.component";
import { OrderComponent } from "../components/order.component"; 

import { OrderGuardService } from "../services/order-guard.service";


const order_routes: Routes = [
    {
        path: 'order',
        component: AuthenticateComponent,
        children: [
            { path: "", component: OrderComponent },
            {
                path: ":orderId",
                component: OrderComponent,
                //canActivate: [OrderGuardService]
            }
        ]
    },
];

export const order_routing = RouterModule.forChild(order_routes);