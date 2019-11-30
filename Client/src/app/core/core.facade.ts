import { Injectable } from "@angular/core";
import { AuthServices, ProductosService } from "@services";
import { Credential, Producto } from "@models";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { CoreStore } from "@core/core.store";
import { User } from "@models";
import { Router } from "@angular/router";

@Injectable()
export class CoreFacade {
  constructor(
    private aothService: AuthServices,
    private coreStore: CoreStore,
    private router: Router,
    private productosService: ProductosService
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
    return this.coreStore.isAdmin;
  }

  get isSuperAdmin(): Observable<boolean> {
    let superAdmin;
    this.coreStore.getUser.subscribe(user =>
      user.permisos.compras === "crear"
        ? (superAdmin = true)
        : (superAdmin = false)
    );
    return of(superAdmin);
  }

  get getProductosDestacados(): Observable<Array<Producto>> {
    const data = { page: 1 };
    return this.productosService.findAll(data).pipe(map(res => res.data.docs));
  }
}
