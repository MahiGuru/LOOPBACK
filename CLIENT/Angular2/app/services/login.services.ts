import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
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

import {CustomerClass as Customer } from '../components/customer.class';

@Injectable()
export class LoginService {
	  isLoggedIn: boolean = false;  
	  constructor(public http:Http){}
	  
	  getCustomers() :Promise<any[]> {
	  	return this.http.get('http://localhost:2000/api/Customers')
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }
	  getCustomerById(id:any) : Promise<any[]>{
	  	return this.http.get('http://localhost:2000/api/Customers/'+id)
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }

	  removeUserById(id:any) : Promise<any>{
	  	return this.http.delete('http://localhost:2000/api/Customers/'+id)
	  			.toPromise()
	  			.then(this.extractData)
	  			.catch(this.handleError);
	  }

	  addCustomer(customer:any) : Observable<any> { 
	  	let headers = new Headers({'content-type':'application/json'});
	  	let options = new RequestOptions({headers: headers});
	  	console.log("customer From Service >>> ", customer);
	  	return this.http.post('http://localhost:2000/api/Customers/', customer, options)
	  			.map(this.extractData)
	  			.catch(this.handleError);
	  }
	  updateCustomer(id:any, customer:any) : Observable<any>{
	  	let headers = new Headers({'content-type':'application/json'});
	  	let options = new RequestOptions({headers: headers});
	  	return this.http.put('http://localhost:2000/api/Customers/'+id, customer, options)
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
 
}
