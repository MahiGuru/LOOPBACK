"use strict";
var router_1 = require('@angular/router');
var authenticate_component_1 = require("../../authenticate/authenticate.component");
var order_component_1 = require("../components/order.component");
var order_routes = [
    {
        path: 'order',
        component: authenticate_component_1.AuthenticateComponent,
        children: [
            { path: "", component: order_component_1.OrderComponent },
            {
                path: ":orderId",
                component: order_component_1.OrderComponent,
            }
        ]
    },
];
exports.order_routing = router_1.RouterModule.forChild(order_routes);
//# sourceMappingURL=order.route.js.map