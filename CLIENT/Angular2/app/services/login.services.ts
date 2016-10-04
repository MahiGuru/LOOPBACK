import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay'; 
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


import {Urls, AppHttps} from "./common/common.serviceUrls";

import {CustomerClass as Customer } from '../datacontracts/customer.class';

@Injectable()
export class LoginService {
	  baseUrl:string = 'http://localhost:2000/api/';
	  isLoggedIn: boolean = false;
		constructor(public http: Http, private jsonp: Jsonp, public appHttp:AppHttps){
			this.appHttp = new AppHttps(this.http);
			 
		}
	  
    headers = new Headers({
        'content-type': 'application/json'
    });
    options = new RequestOptions({
        headers: this.headers
    });
		UserLoginMethod(email:string, password:string) : Promise<any>{
			  return this.appHttp.Get('Customers?filter[where][email]='+email+'&filter[where][password]='+password);				
		}


	  getCustomers() :Promise<any[]> {
	  	return this.http.get(this.baseUrl+'Customers')
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }
	  getCustomerById(id:any) : Promise<any[]>{
	  	return this.http.get(this.baseUrl+'Customers/'+id)
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }

	  removeUserById(id:any) : Promise<any>{
	  	return this.http.delete(this.baseUrl+'Customers/'+id)
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }

	  addCustomer(customer:any) : Observable<any> { 
	  	console.log("customer From Service >>> ", customer);
	  	return this.http.post(this.baseUrl+'Customers/', customer, this.options)
	  			.map(this.extractData)
	  			.catch(this.handleError);
	  }
	  updateCustomer(id:any, customer:any) : Observable<any>{
	  	return this.http.put(this.baseUrl+'Customers/'+id, customer, this.options)
	  			.map(this.extractData)
	  			.catch(this.handleError);
	  }

	  private extractData(res: Response) {
	    let body = res.json();
	  	console.log("RES BODY ", body);
	    return body || { };
	  }
	  private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    // We'd also dig deeper into the error to get a better message
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
	  }
  } 