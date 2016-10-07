import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material'; 
import { HttpModule, JsonpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './routes/app.routing';

import { AppComponent }  from './app.component';  

import { LoginService } from './services/login.services';
import { AppHttps } from "./services/common/common.serviceUrls"
 
import { MenuModule } from "./modules/menu/menu.module";
import { OrderModule } from "./modules/order/order.module";
import { AuthenticateModule } from "./modules/authenticate/authenticate.module";

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, AuthenticateModule, MenuModule,OrderModule, MaterialModule.forRoot(), routing],
  declarations: [ AppComponent ],
  providers : [appRoutingProviders],
  bootstrap: [  AppComponent ]
})
export class AppModule { } 
