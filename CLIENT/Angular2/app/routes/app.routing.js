"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../modules/authenticate/components/login.component');
var appRoutes = [
    { path: 'signin', component: login_component_1.LoginComponent },
    /*{ path: 'menu', component: MenuComponent },
    { path: 'menu/:customerId/:venueId', component: MenuComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'signup/:id', component: SignupComponent }, */
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: '**', redirectTo: '/signin' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map