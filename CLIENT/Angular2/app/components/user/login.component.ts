import { Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';
import { Location } from '@angular/common';

import {LoginService} from '../../services/login.services';
import {CustomerClass as Customer } from '../../datacontracts/customer.class';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'login-app',
    moduleId: module.id,     
    templateUrl: '../../views/login.html',
    providers : [LoginService]
})
export class LoginComponent {   
	constructor(private loginService:LoginService,  private route: ActivatedRoute, private router: Router, private location:Location){}

	cust = {
		username : "Mahipal", 
		password : "mahi6535",
		email : "maks6535@gmail.com",
		mobileNumber : 9441076540 
	} 

	public getId : any;

	ngOnInit() {
	  this.route.params.forEach((params: Params) => { 
	     this.getId = (params['_id']); // (+) converts string 'id' to a number
	     console.log("IDD >> ", params['_id']);
	     //this.service.getHero(id).then(hero => this.hero = hero);
	   });
	}

	customer = new Customer(this.cust.username, this.cust.password);  
	 people:any;
	 errorMessage : any;
	 public Userdetails:any;
	 onSelectedHero :any;

    onSelect(item:any) {
    	let link = ['/signup', item.id]; 
  		this.router.navigate(link); 
  		//return;
	}

	getCustomers(){ 
         this.loginService.getCustomers().then(
         		heroes => { console.log(heroes); this.people = heroes},
         		error => this.errorMessage = <any>error
         	);

		 console.log(this.people, this.errorMessage); 
	}
	getCustomerById(id:any){
		console.log(id);
		this.loginService.getCustomerById(id).then(
         		heroes => { console.log("Details >> ", heroes); this.Userdetails = heroes},
         		error => this.errorMessage = <any>error
         	);
	}
	removeUser(id:any){
		console.log(id);
		this.loginService.removeUserById(id).then(
				data => { console.log("DATA ", data); this.getCustomers();},
				error => this.errorMessage = <any>error
			)
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
		//let cust = {username : customer.username, password : customer.password, email :"added@gmail.com", mobileno :84665464564);  
		var cust = {
		    "firstname": "MAHI",
		    "lastName": "MAKS",
		    "mobileNo": customer.username,
		    "email": customer.password
		}
		console.log("CUST ", customer);
		this.loginService.addCustomer(cust).subscribe(
				cust => { console.log(cust); this.people.push(cust)},
				err => { this.errorMessage = <any>err}
			)
	}




}

