import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanActivateChild, Routes, RouterStateSnapshot, ActivatedRouteSnapshot, Router, RouterState } from "@angular/router"


@Injectable()
export class OrderGuardService implements CanActivate {
    public isLoggedIn: boolean = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Order Guard Service Called", state);
        if (!this.isLoggedIn) this.router.navigate(['/auth']);
        return false;
    }


} 