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
  isSmallScreen: boolean;

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
  }

  sidenavToggle() {
    this.sidenav.emit();
  }

  get isAdmin$() {
    return this.coreFacade.isAdmin;
  }

  get user$() {
    return this.coreFacade.getUser;
  }

  get carrito$() {
    return this.carritoFacade.getCarrito$;
  }

  logout() {
    this.coreFacade.removeFromLocalStorage();
  }
}
