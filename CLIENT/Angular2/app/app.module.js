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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var http_1 = require('@angular/http');
var app_routing_1 = require('./routes/app.routing');
var app_component_1 = require('./components/app.component');
var login_component_1 = require('./components/user/login.component');
var signup_component_1 = require('./components/user/signup.component');
var menu_component_1 = require('./components/menu/menu.component');
var order_component_1 = require('./components/order/order.component');
var login_services_1 = require('./services/login.services');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, material_1.MaterialModule.forRoot(), app_routing_1.routing],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, menu_component_1.MenuComponent, order_component_1.OrderComponent, signup_component_1.SignupComponent],
            providers: [app_routing_1.appRoutingProviders, login_services_1.LoginService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map