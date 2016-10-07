import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';

import {LoginService} from '../../../services/login.services';
import {CustomerClass as Customer } from '../../../datacontracts/customer.class';

@Component({
    selector: 'signup-app',
    moduleId: module.id,     
    templateUrl: './signup.html'
})
export class SignupComponent {   
	constructor(private loginService:LoginService,  private route: ActivatedRoute, private router: Router){
	}
	public getId : any;
	ngOnInit() {
		console.log(this.route.params);
		this.route.params.forEach((params: Params) => { 
		   this.getId = (params['id']); // (+) converts string 'id' to a number
			this.getCustomerById();		
		});
	}

	getCustomerById(){
		console.log(this.getId, this.customer); 
		this.loginService.getCustomerById(this.getId).then(
         		(user:any) => { 
         			console.log("Details >> ", this.customer); 
         			this.customer = new Customer(user.email, user.password, user.mobileNo, user.firstname, user.lastName);
         		},
         		error => this.errorMessage = <any>error
         	); 
         	
	}
 
	userDetails = {
		email  : "mahi6535@gmail.com", 
		firstname  :"Mahipal", 
		lastName : "Gurjala",
		mobileNo  :9441076540, 
		password : "mahi6535"
	}

	customer = new Customer(this.userDetails.email, this.userDetails.password, this.userDetails.mobileNo, this.userDetails.firstname, this.userDetails.lastName);  
	people:any[] = [];
	errorMessage : any;
	
	public Userdetails:any;

	getCustomers(){ 
         this.loginService.getCustomers().then(
         		heroes => { console.log(heroes); this.people = heroes},
         		error => this.errorMessage = <any>error
         	);

		 console.log(this.people, this.errorMessage); 
	} 

	updateUser(id:any, customer:any){
		var cust = {
		    "firstname": "MAHI",
		    "lastName": "MAKS",
		    "mobileNo": customer.username,
		    "email": customer.password
		}
		cust.mobileNo = "Updated Mobile No";
		cust.email = "Updated Email"; 

		this.loginService.updateCustomer(id, cust).subscribe(
			data => { console.log("UPDATE >> ", data);  this.getCustomers(); },
			err => this.errorMessage = <any>err
		)
		
	}


	addCustomer(customer:any){ 
		console.log("CUST ", customer);
		this.loginService.addCustomer(customer).subscribe(
				cust => { console.log(cust); this.people.push(cust)},
				err => { this.errorMessage = <any>err}
			)
	}




}


