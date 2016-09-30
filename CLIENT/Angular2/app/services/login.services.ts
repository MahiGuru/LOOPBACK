import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
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

	  /*
	  	* Using Observable and returns observable...
	  */
	  getUsers():  Observable<any[]>{

		    return this.http.get('http://localhost:2000/api/Customers')
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
