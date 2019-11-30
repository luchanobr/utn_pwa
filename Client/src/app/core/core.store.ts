import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import { User } from "@models";

@Injectable()
export class CoreStore {
  constructor() {}

  private user$ = new BehaviorSubject<User>(null);

  setUser(user: User): void {
    this.user$.next(user);
  }
  get getUser(): Observable<User> {
    return this.user$.asObservable().pipe(distinctUntilChanged());
  }

  get isAdmin(): Observable<boolean> {
    let user = this.user$.getValue();

    return of(user.admin);
  }

  get isSuperAdmin(): Observable<boolean> {
    let user = this.user$.getValue();
    let superAdmin = false;
    user.permisos.compras === "crear" ? (superAdmin = true) : null;
    return of(superAdmin);
  }

  get userId(): string {
    return this.user$.getValue().id;
  }
}
