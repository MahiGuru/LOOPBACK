import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MenuComponent }  from './components/menu.component';
import { MenuDashboardComponent }  from './components/menu-dashboard.component';

import { menu_routing } from "./routes/menu.route";
import { MenuGuardService } from "./services/menu-guard.service";

@NgModule({
  imports: [CommonModule, menu_routing],
  declarations: [MenuComponent, MenuDashboardComponent],
  exports: [MenuComponent, MenuDashboardComponent],
  providers: [MenuGuardService]
})
export class MenuModule { }
