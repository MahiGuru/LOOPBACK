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
var order_route_1 = require("./routes/order.route");
var order_guard_service_1 = require("./services/order-guard.service");
var order_component_1 = require('./components/order.component');
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, order_route_1.order_routing],
            declarations: [order_component_1.OrderComponent],
            exports: [order_component_1.OrderComponent],
            providers: [order_guard_service_1.OrderGuardService]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map