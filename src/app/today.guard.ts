import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodayGuard implements CanActivate {

  constructor(private readonly router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): UrlTree {

    console.log({ next, state });

    const date = new Date();

    return this.router.createUrlTree([
      '/',
      date.getFullYear().toFixed(0),
      (date.getMonth() + 1).toFixed(0),
      date.getDate().toFixed(0)
    ]);
  }

}
