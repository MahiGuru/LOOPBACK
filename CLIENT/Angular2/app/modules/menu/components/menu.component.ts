import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';
 

import { Location } from '@angular/common';

import {LoginService} from '../../../services/login.services';
import {CustomerClass as Customer } from '../../../datacontracts/customer.class';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'menu-app',
    moduleId: module.id,     
    templateUrl: './menu.html'
})
export class MenuComponent {   
	constructor(
		private loginService:LoginService,  
		private route: ActivatedRoute, 
		private router: Router, 
		private location:Location){		
	}
	   
    onSelect(id:any) {
    	console.log(this.router);
    	//this.router.navigateByUrl('/signup/'+id);
    	let link = ['/signup', id]; 
  		this.router.navigate(link, {relativeTo: this.route}); 
  		//return;
	}
  
 
}