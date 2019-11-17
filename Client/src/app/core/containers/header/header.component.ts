import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { CoreFacade } from "@app/core/core.facade";
import { Observable } from "rxjs";
import { User, Producto } from "@models";
import { BreakpointObserver } from "@angular/cdk/layout";
import { CarritoFacade } from "@app/core/carrito.facade";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  isAdmin$: Observable<boolean>;
  isSmallScreen: boolean;
  carrito$: Observable<Array<Producto>>;
  @Output() sidenav = new EventEmitter<boolean>();

  constructor(
    private coreFacade: CoreFacade,
    private breakpointObserver: BreakpointObserver,
    private carritoFacade: CarritoFacade
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(["(max-width: 990px)"])
      .subscribe(screen =>
        screen.breakpoints["(max-width: 990px)"] === true
          ? (this.isSmallScreen = true)
          : (this.isSmallScreen = false)
      );
    this.user$ = this.coreFacade.getUser;
    this.isAdmin$ = this.coreFacade.isAdmin;
    this.carrito$ = this.carritoFacade.getCarrito$;
  }

  sidenavToggle() {
    this.sidenav.emit();
  }

  logout() {
    this.coreFacade.removeFromLocalStorage();
  }
}
