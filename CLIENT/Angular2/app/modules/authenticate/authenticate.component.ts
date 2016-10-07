import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms'; 

@Component({
    selector: 'auth-app',
    moduleId: module.id,     
    template: `<h2> Authenticate Module </h2> 
    <router-outlet></router-outlet>`
})
export class AuthenticateComponent {   
 
} 