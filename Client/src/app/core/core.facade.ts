import { Injectable } from "@angular/core";
import { AuthServices } from "@services";
import { Credential } from "@models";
import { Observable, of } from "rxjs";
import { CoreStore } from "@core/core.store";
import { User } from "@models";
import { Router } from "@angular/router";

@Injectable()
export class CoreFacade {
  constructor(
    private aothService: AuthServices,
    private coreStore: CoreStore,
    private router: Router
  ) {}

  loginUser(crendential: Credential) {
    return this.aothService.login(crendential).subscribe(res => {
      const user: User = res.body.data;
      this.saveOnLocalStorage(user);
      this.coreStore.setUser(user);
      user.admin ? this.router.navigateByUrl("dashboard") : null;
    });
  }

  get getUser(): Observable<User> {
    if (this.loadFromLocalStorage) {
      const user = JSON.parse(this.loadFromLocalStorage);
      this.coreStore.setUser(user);
    }
    return this.coreStore.getUser;
  }

  saveOnLocalStorage(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  get loadFromLocalStorage(): string {
    return localStorage.getItem("user");
  }

  removeFromLocalStorage(): void {
    this.coreStore.setUser(null);
    localStorage.removeItem("user");
    this.router.navigate(["home"]);
  }

  get isAdmin(): Observable<boolean> {
    let admin: boolean = false;
    this.coreStore.getUser.subscribe(user => (user.admin ? (admin = true) : null));
    return of(admin);
  }
  get isSuperAdmin(): Observable<boolean> {
    let superAdmin;
    this.coreStore.getUser.subscribe(user =>
      user.permisos.compras === "crear" ? (superAdmin = true) : (superAdmin = false)
    );
    return of(superAdmin);
  }
}
