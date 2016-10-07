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
require('rxjs/add/operator/map');
var common_1 = require('@angular/common');
var login_services_1 = require('../../../services/login.services');
var router_1 = require('@angular/router');
var MenuComponent = (function () {
    function MenuComponent(loginService, route, router, location) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    MenuComponent.prototype.onSelect = function (id) {
        console.log(this.router);
        //this.router.navigateByUrl('/signup/'+id);
        var link = ['/signup', id];
        this.router.navigate(link, { relativeTo: this.route });
        //return;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-app',
            moduleId: module.id,
            templateUrl: './menu.html'
        }), 
        __metadata('design:paramtypes', [login_services_1.LoginService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map