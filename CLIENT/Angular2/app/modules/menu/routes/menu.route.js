"use strict";
var router_1 = require('@angular/router');
var authenticate_component_1 = require("../../authenticate/authenticate.component");
var menu_component_1 = require("../components/menu.component");
var menu_dashboard_component_1 = require("../components/menu-dashboard.component");
var menu_guard_service_1 = require("../services/menu-guard.service");
var menu_routes = [
    {
        path: 'menu',
        component: authenticate_component_1.AuthenticateComponent,
        children: [
            { path: "", component: menu_component_1.MenuComponent },
            {
                path: ":menuid/:userid",
                component: menu_dashboard_component_1.MenuDashboardComponent,
                canActivate: [menu_guard_service_1.MenuGuardService]
            }
        ]
    },
];
exports.menu_routing = router_1.RouterModule.forChild(menu_routes);
//# sourceMappingURL=menu.route.js.map