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
var common_serviceUrls_1 = require('../../../services/common/common.serviceUrls');
var login_services_1 = require('../../../services/login.services');
var customer_class_1 = require('../../../datacontracts/customer.class');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(loginService, route, router, location, appHttps) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.appHttps = appHttps;
        this.cust = {
            username: "Mahipal",
            password: "mahi6535",
            email: "maks6535@gmail.com",
            mobileNumber: 9441076540
        };
        this.customer = new customer_class_1.CustomerClass(this.cust.username, this.cust.password);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.getId = (params['_id']); // (+) converts string 'id' to a number
            console.log("IDD >> ", params['_id']);
            //this.service.getHero(id).then(hero => this.hero = hero);
        });
    };
    LoginComponent.prototype.onSelectUser = function (item) {
        var link = ['/signup', item.id];
        this.router.navigate(link);
        //return;
    };
    LoginComponent.prototype.checkLogin = function (customer) {
        var _this = this;
        this.loginService.getCustomers().then(function (heroes) { console.log("GET CUSTOMERS - ", heroes); _this.people = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.getCustomers = function () {
        var _this = this;
        this.loginService.getCustomers().then(function (heroes) { console.log("GET CUSTOMERS - ", heroes); _this.people = heroes; }, function (error) { return _this.errorMessage = error; });
        console.log(this.people, this.errorMessage);
    };
    LoginComponent.prototype.getCustomerById = function (id) {
        var _this = this;
        console.log(id);
        this.loginService.getCustomerById(id).then(function (heroes) { console.log("GetCustomerID >> ", heroes); _this.Userdetails = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.removeUser = function (id) {
        var _this = this;
        console.log(id);
        this.loginService.removeUserById(id).then(function (data) { console.log("REMOVE USER ", data); _this.getCustomers(); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.updateUser = function (id, customer) {
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
    LoginComponent.prototype.addCustomer = function (customer) {
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            moduleId: module.id,
            templateUrl: './login.html',
            providers: [common_serviceUrls_1.AppHttps, login_services_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_services_1.LoginService, router_1.ActivatedRoute, router_1.Router, common_1.Location, common_serviceUrls_1.AppHttps])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map