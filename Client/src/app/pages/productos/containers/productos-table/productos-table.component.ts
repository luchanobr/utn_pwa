import { Component, OnInit, ViewChild } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MatPaginator } from "@angular/material/paginator";
import { ProductosFacade } from "../../productos.facade";
import { Producto } from "@models";
import { Observable } from "rxjs";
import { CoreFacade } from "@core/core.facade";
import { ModalFacade } from "../../modalFacade";
@Component({
  selector: "app-productos-table",
  templateUrl: "./productos-table.component.html",
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class ProductosTableComponent implements OnInit {
  columnas = ["acciones", "nombre", "precio", "stock"];
  expandedproducto: Producto | null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private productosFacade: ProductosFacade,
    private coreFacade: CoreFacade,
    private modalFacade: ModalFacade
  ) {}

  ngOnInit(): void {
    this.productosFacade.fechtProductos();
  }

  get productos$() {
    return this.productosFacade.getProductos;
  }

  get paginador$() {
    return this.productosFacade.getPaginador;
  }

  get isAdmin$(): Observable<boolean> {
    return this.coreFacade.isAdmin;
  }

  get superAdmin$(): Observable<boolean> {
    return this.coreFacade.isSuperAdmin;
  }

  pageChange($event) {
    let data = {
      page: $event.pageIndex + 1
    };
    this.productosFacade.fechtProductos(data);
  }

  crearProducto() {
    this.modalFacade.productoModal({ type: "create" });
  }

  editProducto(producto: Producto) {
    this.modalFacade.productoModal({ type: "edit", producto: producto });
    this.productosFacade.setProducto(producto);
  }

  removeProducto(producto: Producto) {
    this.modalFacade.confirmModal({
      type: "delete",
      titulo: "borrar producto",
      subtitulo: "Confirma borrar el siguiente producto:",
      producto: producto
    });
  }
}
