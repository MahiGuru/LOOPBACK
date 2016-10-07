"use strict";
var router_1 = require('@angular/router');
var authenticate_component_1 = require('../authenticate.component');
var login_component_1 = require('../components/login.component');
var signup_component_1 = require('../components/signup.component');
var auth_guard_service_1 = require("../services/auth-guard.service");
var authRoutes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'auth', component: authenticate_component_1.AuthenticateComponent,
        children: [
            {
                path: "",
                component: login_component_1.LoginComponent
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: 'signup',
                children: [
                    {
                        path: '',
                        component: signup_component_1.SignupComponent
                    },
                    {
                        path: ':id',
                        component: signup_component_1.SignupComponent,
                        canActivate: [auth_guard_service_1.AuthGuardService],
                    }
                ]
            }
        ]
    }
];
exports.authRouting = router_1.RouterModule.forChild(authRoutes);
//# sourceMappingURL=authenticate.routing.js.map