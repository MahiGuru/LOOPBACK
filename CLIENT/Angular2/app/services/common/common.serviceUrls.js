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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var AppHttps = (function () {
    function AppHttps(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:2000/api/';
        this.headers = new http_1.Headers({
            'content-type': 'application/json'
        });
        this.headerOptions = new http_1.RequestOptions({
            headers: this.headers
        });
    }
    AppHttps.prototype.Get = function (url) {
        return this.http.get(this.baseUrl + url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AppHttps.prototype.POST = function (url, data) {
        return this.http.post(this.baseUrl + url, JSON.stringify(data), this.headerOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AppHttps.prototype.extractData = function (res) {
        var body = res.json();
        console.log("RES BODY ", body);
        return body || {};
    };
    AppHttps.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AppHttps = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppHttps);
    return AppHttps;
}());
exports.AppHttps = AppHttps;
var Urls = (function () {
    function Urls() {
    }
    return Urls;
}());
exports.Urls = Urls;
//# sourceMappingURL=common.serviceUrls.js.map