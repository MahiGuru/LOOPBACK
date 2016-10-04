import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttps {
    constructor(private http: Http) {}
    baseUrl: string = 'http://localhost:2000/api/';

    headers = new Headers({
        'content-type': 'application/json'
    });
    headerOptions = new RequestOptions({
        headers: this.headers
    });

    Get(url: string) {
        return this.http.get(this.baseUrl + url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError)
    }
    POST(url: string, data: string) {
        return this.http.post(this.baseUrl + url, JSON.stringify(data), this.headerOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("RES BODY ", body);
        return body || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}


export class Urls {
    constructor() {}

}