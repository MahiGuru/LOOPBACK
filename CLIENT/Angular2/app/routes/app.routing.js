"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../components/user/login.component');
var signup_component_1 = require('../components/user/signup.component');
var menu_component_1 = require('../components/menu/menu.component');
var order_component_1 = require('../components/order/order.component');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'orders', component: order_component_1.OrderComponent },
    { path: 'signup/:_id', component: signup_component_1.SignupComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map