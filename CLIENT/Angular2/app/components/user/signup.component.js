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
var login_services_1 = require('../../services/login.services');
var customer_class_1 = require('../../datacontracts/customer.class');
var SignupComponent = (function () {
    function SignupComponent(loginService) {
        this.loginService = loginService;
        this.cust = {
            username: "Mahipal",
            password: "mahi6535",
            email: "maks6535@gmail.com",
            mobileNumber: 9441076540
        };
        this.customer = new customer_class_1.CustomerClass(this.cust.username, this.cust.password);
    }
    SignupComponent.prototype.getCustomers = function () {
        var _this = this;
        this.loginService.getCustomers().then(function (heroes) { console.log(heroes); _this.people = heroes; }, function (error) { return _this.errorMessage = error; });
        console.log(this.people, this.errorMessage);
    };
    SignupComponent.prototype.getCustomerById = function (id) {
        var _this = this;
        console.log(id);
        this.loginService.getCustomerById(id).then(function (heroes) { console.log("Details >> ", heroes); _this.Userdetails = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    SignupComponent.prototype.removeUser = function (id) {
        var _this = this;
        console.log(id);
        this.loginService.removeUserById(id).then(function (data) { console.log("DATA ", data); _this.getCustomers(); }, function (error) { return _this.errorMessage = error; });
    };
    SignupComponent.prototype.updateUser = function (id, customer) {
        var _this = this;
        var cust = {
            "firstname": "MAHI",
            "lastName": "MAKS",
            "mobileNo": customer.username,
            "email": customer.password
        };
        cust.mobileNo = "Updated Mobile No";
        cust.email = "Updated Email";
        this.loginService.updateCustomer(id, cust).subscribe(function (data) { console.log("UPDATE >> ", data); _this.getCustomers(); }, function (err) { return _this.errorMessage = err; });
    };
    SignupComponent.prototype.addCustomer = function (customer) {
        var _this = this;
        //let cust = {username : customer.username, password : customer.password, email :"added@gmail.com", mobileno :84665464564);  
        var cust = {
            "firstname": "MAHI",
            "lastName": "MAKS",
            "mobileNo": customer.username,
            "email": customer.password
        };
        console.log("CUST ", customer);
        this.loginService.addCustomer(cust).subscribe(function (cust) { console.log(cust); _this.people.push(cust); }, function (err) { _this.errorMessage = err; });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup-app',
            moduleId: module.id,
            templateUrl: '../../views/signup.html'
        }), 
        __metadata('design:paramtypes', [login_services_1.LoginService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map