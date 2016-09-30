import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material'; 
import { HttpModule, JsonpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './routes/app.routing';

import { AppComponent }  from './components/app.component';
import { LoginComponent }  from './components/login.component';
import { MenuComponent }  from './components/menu.component';
import { OrderComponent }  from './components/order.component';

import { LoginService } from './services/login.services';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, MaterialModule.forRoot(), routing],
  declarations: [ AppComponent, LoginComponent, MenuComponent, OrderComponent ],
  providers : [appRoutingProviders, LoginService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }