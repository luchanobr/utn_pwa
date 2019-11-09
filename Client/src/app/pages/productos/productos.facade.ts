import { Injectable } from "@angular/core";
import { ProductosService } from "@app/core/services";
import { ProductosStore } from "./productos.store";
import { Paginador, Producto } from "@models";
import { FormBuilder, Validators } from "@angular/forms";
import { CategoriaService } from "../services";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "@shared/containers/alert/alert.component";

@Injectable()
export class ProductosFacade {
  producto: Producto = { categoria: {} } as Producto;
  constructor(
    private productosService: ProductosService,
    private productosStore: ProductosStore,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private dialogServices: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  fechtProductos(data = { page: "1" }) {
    this.productosService.findAll(data).subscribe(res => {
      this.productosStore.setPaginador = new Paginador(res.data);
      this.productosStore.setProductos = res.data.docs;
    });
  }

  fetchCategorias() {
    this.categoriaService.findAll().subscribe(res => {
      this.productosStore.setCategorias = res.data;
    });
  }

  get getCategorias() {
    return this.productosStore.getCategorias;
  }

  get getProductos() {
    return this.productosStore.getProductos;
  }

  get getPaginador() {
    return this.productosStore.getPaginador;
  }

  productoForm = this.fb.group({
    nombre: [this.producto.nombre, [Validators.required]],
    descripcion: [this.producto.descripcion, [Validators.required]],
    active: [this.producto.active || false],
    destacado: [this.producto.destacado || false],
    img: [this.producto.img, Validators.required],
    categoria: this.fb.group({
      _id: [this.producto.categoria._id, [Validators.required]]
    }),
    precio: [this.producto.precio, [Validators.required]],
    stock: [this.producto.stock, [Validators.required]]
  });

  setProducto(producto: Producto) {
    this.productoForm.patchValue(producto);
  }

  createProducto(data: Producto, dialog) {
    this.productosService.create(data).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.productoForm.reset();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 2500,
        panelClass: ["mt-1", "p-0", "bg-success"],
        data: { msg: "Producto creado correctamente", type: "success" }
      });
      this.fechtProductos();
    });
  }

  editProducto(data: Producto, id, dialog) {
    this.productosService.edit(data, id).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.productoForm.reset();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 2500,
        panelClass: ["mt-1", "p-0", "bg-success"],
        data: { msg: "Producto editado correctamente", type: "success" }
      });
      this.fechtProductos();
    });
  }

  deleteProducto(id, dialog) {
    this.productosService.delete(id).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 2500,
        panelClass: ["mt-1", "p-0", "bg-success"],
        data: { msg: "Producto borrado correctamente", type: "success" }
      });
      this.fechtProductos();
    });
  }
}
