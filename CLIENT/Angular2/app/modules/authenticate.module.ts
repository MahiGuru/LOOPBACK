import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {DependantModule} from "./dependant.module" 

import { authRouting } from "../routes/authenticate.routing";


import { LoginService } from '../services/login.services';
import { AppHttps } from "../services/common/common.serviceUrls";

import { LoginComponent }  from '../components/user/login.component';
import { SignupComponent }  from '../components/user/signup.component'; 

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule.forRoot(), authRouting],
  declarations: [ LoginComponent, SignupComponent ],
  exports : [LoginComponent, SignupComponent],
  providers : [AppHttps, LoginService]
}) 
export class AuthenticateModule { } 
