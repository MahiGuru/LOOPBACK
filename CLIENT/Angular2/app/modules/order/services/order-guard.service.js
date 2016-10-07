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
var router_1 = require("@angular/router");
var OrderGuardService = (function () {
    function OrderGuardService(router) {
        this.router = router;
        this.isLoggedIn = true;
    }
    OrderGuardService.prototype.canActivate = function (route, state) {
        console.log("Order Guard Service Called", state);
        if (!this.isLoggedIn)
            this.router.navigate(['/auth']);
        return false;
    };
    OrderGuardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OrderGuardService);
    return OrderGuardService;
}());
exports.OrderGuardService = OrderGuardService;
//# sourceMappingURL=order-guard.service.js.map