import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';

import { order_routing } from "./routes/order.route";
import { OrderGuardService } from "./services/order-guard.service";

import { OrderComponent }  from './components/order.component';

@NgModule({
  imports: [ CommonModule, order_routing],
  declarations: [ OrderComponent ],
  exports : [OrderComponent],
  providers : [OrderGuardService]
}) 
export class OrderModule { } 
