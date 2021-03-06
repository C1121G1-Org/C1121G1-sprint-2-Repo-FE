import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../../service/security/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser =  this.tokenStorageService.getUser();
    if (currentUser !== null){
      const role = currentUser.roles[0];
      if (next.data.roles.indexOf(role) === -1){
        this.router.navigate(['error'], {
          queryParams: { returnUrl: state.url }});
        return false;
      }
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return true;
  }
}
