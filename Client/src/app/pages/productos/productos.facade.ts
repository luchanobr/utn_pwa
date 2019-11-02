import { Injectable } from "@angular/core";
import { ProductosService } from "@app/core/services";
import { ProductosStore } from "./productos.store";
import { Paginador, Producto } from "@models";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable()
export class ProductosFacade {
  producto: Producto = { categoria: {} } as Producto;
  constructor(
    private productosService: ProductosService,
    private productosStore: ProductosStore,
    private fb: FormBuilder
  ) {}

  fechtProductos(data = { page: "1" }) {
    this.productosService.findAll(data).subscribe(res => {
      this.productosStore.setPaginador = new Paginador(res.data);
      this.productosStore.setProductos = res.data.docs;
    });
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
    active: [this.producto.active, [Validators.required]],
    destacado: [this.producto.destacado, [Validators.required]],
    img: [this.producto.img, Validators.required],
    categoria: this.fb.group({
      categoria: [this.producto.categoria.categoria, [Validators.required]]
    }),
    precio: [this.producto.precio, [Validators.required]],
    stock: [this.producto.stock, [Validators.required]]
  });

  setProducto(producto: Producto) {
    this.productoForm.patchValue(producto);
  }

  createProducto(data: Producto, dialog) {
    this.productosService.create(data).subscribe(res => console.log(res));
  }

  editProducto(data: Producto, id, dialog) {
    this.productosService.edit(data, id).subscribe(res => console.log(res));
  }

  deleteProducto(id) {
    this.productosService.delete(id).subscribe(res => console.log(res));
  }
}
