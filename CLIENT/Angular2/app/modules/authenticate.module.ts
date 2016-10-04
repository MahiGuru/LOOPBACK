import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {DependantModule} from "./dependant.module"

import { routing, appRoutingProviders }  from '../routes/app.routing';



import { LoginComponent }  from '../components/user/login.component';
import { SignupComponent }  from '../components/user/signup.component'; 

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule.forRoot(), routing],
  declarations: [ LoginComponent, SignupComponent ],
  exports : [LoginComponent, SignupComponent],
  providers : [appRoutingProviders]
}) 
export class AuthenticateModule { } 
