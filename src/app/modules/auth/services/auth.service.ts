import { Injectable } from '@angular/core';
import { environment } from '@env';
import { LoginDto } from "@app/modules/auth/dtos/login.dto";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor() {
  }

  // public methods
  async login(payload: LoginDto): Promise<boolean> {
    const isValidLogin = payload.username === "administrator" && payload.password === "password";

    if (isValidLogin) {
      await localStorage.setItem(this.authLocalStorageToken, String(isValidLogin));
    }

    return isValidLogin;
  }

  async logout() {
    await localStorage.removeItem(this.authLocalStorageToken);
  }
}
