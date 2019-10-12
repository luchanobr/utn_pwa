import { Injectable } from '@angular/core';
import { AuthServices } from '@services/index';
import { Credential } from '@models/index';
import { Observable } from 'rxjs';
import { CoreStore } from '@core/core.store';
import { User } from '@models/index';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Injectable()
export class CoreFacade {
  constructor(private aothService: AuthServices, private coreStore: CoreStore, private router: Router) {}

  loginUser(crendential: Credential) {
    return this.aothService.login(crendential).subscribe(res => {
      const user: User = res.body.data;
      this.saveOnLocalStorage(user);
      this.coreStore.setUser(user);
      user.admin ? this.router.navigateByUrl('dashboard') : null;
    });
  }

  getUser(): Observable<User> {
    if (this.loadFromLocalStorage()) {
      const user = JSON.parse(this.loadFromLocalStorage());
      this.coreStore.setUser(user);
    }
    return this.coreStore.getUser();
  }

  saveOnLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadFromLocalStorage(): string {
    return localStorage.getItem('user');
  }

  removeFromLocalStorage(): void {
    this.coreStore.setUser(null);
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

  isAdmin(): boolean {
    let admin: boolean = false;
    this.coreStore.getUser().subscribe(user => (user.admin ? (admin = true) : null));
    return admin;
  }
}
