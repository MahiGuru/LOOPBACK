import { Injectable } from '@angular/core';
import {Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
    public isLoggedIn: boolean = false;
    public redirectUrl: string = "";

    constructor(private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //return true;
        this.router.navigate(['/menu']);
        return false;
    }

}