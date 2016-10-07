import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanActivateChild, Routes, RouterStateSnapshot, ActivatedRouteSnapshot, Router, RouterState } from "@angular/router"


@Injectable()
export class MenuGuardService implements CanActivate {
    public isLoggedIn: boolean = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("MENU Guard Service Called", state);
        if (!this.isLoggedIn) this.router.navigate(['/auth']);
        return false;
    }


}