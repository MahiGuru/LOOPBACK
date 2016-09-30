import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';

import {LoginService} from '../services/login.services';

@Component({
    selector: 'login-app',
    moduleId: module.id,     
    templateUrl: '../views/login.html'
})
export class LoginComponent {   
	constructor(private loginService:LoginService){}

	cust = {
		username : "Mahipal", 
		password : "mahi6535",
		email : "maks6535@gmail.com",
		mobileNumber : 9441076540

	}
	customer = new Customer(this.cust.username, this.cust.password);  
	 people:any;
	 errorMessage : any;
	getCustomer(customer:any){
		/*this.loginService.getUsers().subscribe(
                       (heroes) => this.people = heroes,
                       (error) =>  this.errorMessage = <any>error);
                       */
         this.loginService.getCustomers().then(
         		heroes => { console.log(heroes); this.people = heroes},
         		error => this.errorMessage = <any>error
         	);

		 console.log(customer, this.people, this.errorMessage); }
	}
}


class Customer {
	constructor(public username:string, public password:string, public email?:string, public mobileNumber ?: number){
		this.username = username;
		this.password = password;
		this.email = email;
		this.mobileNumber = mobileNumber;
	} 
}