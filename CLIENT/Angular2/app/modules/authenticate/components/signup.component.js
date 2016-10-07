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
var router_1 = require('@angular/router');
var login_services_1 = require('../../../services/login.services');
var customer_class_1 = require('../../../datacontracts/customer.class');
var SignupComponent = (function () {
    function SignupComponent(loginService, route, router) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.userDetails = {
            email: "mahi6535@gmail.com",
            firstname: "Mahipal",
            lastName: "Gurjala",
            mobileNo: 9441076540,
            password: "mahi6535"
        };
        this.customer = new customer_class_1.CustomerClass(this.userDetails.email, this.userDetails.password, this.userDetails.mobileNo, this.userDetails.firstname, this.userDetails.lastName);
        this.people = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.route.params.forEach(function (params) {
            _this.getId = (params['id']); // (+) converts string 'id' to a number
            _this.getCustomerById();
        });
    };
    SignupComponent.prototype.getCustomerById = function () {
        var _this = this;
        console.log(this.getId, this.customer);
        this.loginService.getCustomerById(this.getId).then(function (user) {
            console.log("Details >> ", _this.customer);
            _this.customer = new customer_class_1.CustomerClass(user.email, user.password, user.mobileNo, user.firstname, user.lastName);
        }, function (error) { return _this.errorMessage = error; });
    };
    SignupComponent.prototype.getCustomers = function () {
        var _this = this;
        this.loginService.getCustomers().then(function (heroes) { console.log(heroes); _this.people = heroes; }, function (error) { return _this.errorMessage = error; });
        console.log(this.people, this.errorMessage);
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
        console.log("CUST ", customer);
        this.loginService.addCustomer(customer).subscribe(function (cust) { console.log(cust); _this.people.push(cust); }, function (err) { _this.errorMessage = err; });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup-app',
            moduleId: module.id,
            templateUrl: './signup.html'
        }), 
        __metadata('design:paramtypes', [login_services_1.LoginService, router_1.ActivatedRoute, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map