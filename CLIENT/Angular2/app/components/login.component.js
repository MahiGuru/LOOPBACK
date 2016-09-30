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
var login_services_1 = require('../services/login.services');
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.cust = {
            username: "Mahipal",
            password: "mahi6535",
            email: "maks6535@gmail.com",
            mobileNumber: 9441076540
        };
        this.customer = new Customer(this.cust.username, this.cust.password);
    }
    LoginComponent.prototype.getCustomer = function (customer) {
        var _this = this;
        /*this.loginService.getUsers().subscribe(
                       (heroes) => this.people = heroes,
                       (error) =>  this.errorMessage = <any>error);
                       */
        this.loginService.getCustomers().then(function (heroes) { console.log(heroes); _this.people = heroes; }, function (error) { return _this.errorMessage = error; });
        console.log(customer, this.people, this.errorMessage);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            moduleId: module.id,
            templateUrl: '../views/login.html'
        }), 
        __metadata('design:paramtypes', [login_services_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var Customer = (function () {
    function Customer(username, password, email, mobileNumber) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
    return Customer;
}());
//# sourceMappingURL=login.component.js.map