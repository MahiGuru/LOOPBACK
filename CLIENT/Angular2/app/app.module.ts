import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material'; 
import { HttpModule, JsonpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './routes/app.routing';

import { AppComponent }  from './components/app.component';  

import { LoginService } from './services/login.services';
import { AppHttps } from "./services/common/common.serviceUrls"

import { DependantModule } from "./modules/dependant.module";
import { MenuModule } from "./modules/menu.module";
import { OrderModule } from "./modules/order.module";
import { AuthenticateModule } from "./modules/authenticate.module";

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule,DependantModule, AuthenticateModule, MenuModule,OrderModule, MaterialModule.forRoot(), routing],
  declarations: [ AppComponent ],
  providers : [AppHttps, appRoutingProviders, LoginService],
  bootstrap: [  AppComponent ]
})
export class AppModule { } 
