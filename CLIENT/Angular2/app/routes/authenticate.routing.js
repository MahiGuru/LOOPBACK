"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../components/user/login.component');
var signup_component_1 = require('../components/user/signup.component');
var heroesRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup/:id', component: signup_component_1.SignupComponent }
];
exports.authRouting = router_1.RouterModule.forChild(heroesRoutes);
//# sourceMappingURL=authenticate.routing.js.map