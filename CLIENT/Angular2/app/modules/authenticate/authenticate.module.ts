import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { authRouting } from "./routes/authenticate.routing";


import { LoginService } from '../../services/login.services';
import { AppHttps } from "../../services/common/common.serviceUrls";

import { AuthenticateComponent }  from './authenticate.component';
import { LoginComponent }  from './components/login.component';
import { SignupComponent }  from './components/signup.component'; 

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule.forRoot(), authRouting],
  declarations: [ AuthenticateComponent, LoginComponent, SignupComponent ],
  exports : [AuthenticateComponent, LoginComponent, SignupComponent],
  providers : [AppHttps, LoginService]
}) 
export class AuthenticateModule { } 
