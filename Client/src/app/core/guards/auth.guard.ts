import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoreFacade } from '../core.facade';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private coreFacade: CoreFacade, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAdmin = this.coreFacade.isAdmin();
    if (!isAdmin) {
      this.router.navigate(['home']);
    } else return isAdmin;
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = this.coreFacade.isAdmin();
    if (!isAdmin) {
      this.router.navigate(['home']);
    } else return isAdmin;
  }
}
