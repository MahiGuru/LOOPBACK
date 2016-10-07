"use strict";
var router_1 = require('@angular/router');
var authenticate_component_1 = require('../authenticate.component');
var login_component_1 = require('../components/login.component');
var signup_component_1 = require('../components/signup.component');
var heroesRoutes = [
    { path: 'login', component: authenticate_component_1.AuthenticateComponent,
        children: [
            {
                path: ':id',
                component: signup_component_1.SignupComponent
            },
            {
                path: '',
                component: login_component_1.LoginComponent
            }
        ]
    },
    { path: 'signup/:id', component: signup_component_1.SignupComponent }
];
exports.authRouting = router_1.RouterModule.forChild(heroesRoutes);
//# sourceMappingURL=authenticate.routing.js.map