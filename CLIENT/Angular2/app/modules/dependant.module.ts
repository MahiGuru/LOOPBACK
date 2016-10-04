import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { routing, appRoutingProviders }  from '../routes/app.routing';
 
//import { AppComponent }  from '../components/app.component';  

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule.forRoot(), routing],
  //declarations: [ AppComponent ],
  //exports : [AppComponent],
  providers : [appRoutingProviders]
}) 
export class DependantModule { } 
