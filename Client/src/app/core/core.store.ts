import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from './models/user';

@Injectable()
export class CoreStore {
  constructor() {}

  private user$ = new BehaviorSubject<User>(null);

  setUser(user: User): void {
    this.user$.next(user);
  }
  getUser(): Observable<User> {
    return this.user$.asObservable();
  }
}