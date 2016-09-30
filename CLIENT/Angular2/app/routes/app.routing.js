"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../components/login.component');
var menu_component_1 = require('../components/menu.component');
var order_component_1 = require('../components/order.component');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'orders', component: order_component_1.OrderComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map