import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { AuthService } from '@app/modules/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private route: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authToken = localStorage.getItem(this.authService.authLocalStorageToken)

    if (!authToken) {
      this.route.navigateByUrl('auth/login');
      return false;
    }

    return true;
  }
}
