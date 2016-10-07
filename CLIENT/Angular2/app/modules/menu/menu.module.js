"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var menu_component_1 = require('./components/menu.component');
var menu_dashboard_component_1 = require('./components/menu-dashboard.component');
var menu_route_1 = require("./routes/menu.route");
var menu_guard_service_1 = require("./services/menu-guard.service");
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, menu_route_1.menu_routing],
            declarations: [menu_component_1.MenuComponent, menu_dashboard_component_1.MenuDashboardComponent],
            exports: [menu_component_1.MenuComponent, menu_dashboard_component_1.MenuDashboardComponent],
            providers: [menu_guard_service_1.MenuGuardService]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map