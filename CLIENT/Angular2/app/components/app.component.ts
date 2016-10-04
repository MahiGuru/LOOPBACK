import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms'; 

@Component({
    selector: 'my-app',
    moduleId: module.id,     
    template: `<h2> APP ROUTER OUTLET </h2>
    <nav>
	    <a routerLink="/login" routerLinkActive="active">Login</a> | 
	    <a routerLink="/signup/cust_01" routerLinkActive="active">Signup</a>  | 
	    <a routerLink="/menu" routerLinkActive="active">Menu</a>  | 
	    <a routerLink="/orders" routerLinkActive="active">Orders</a>  | 
	    <a routerLink="/" routerLinkActive="active">HOME</a> 
	  </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {   
 
} 