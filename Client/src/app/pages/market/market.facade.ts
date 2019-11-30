import { Injectable } from "@angular/core";
import { ProductosService } from "@app/core/services";
import {
  map,
  shareReplay,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";
import { MarketStore } from "./market.store";
import { Paginador, FilterProducto, Categoria } from "@app/core/models";
import { CategoriaService } from "@services";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CoreStore } from "@app/core";
import { CarritoStore } from "@app/core/carrito.store";

@Injectable()
export class MarketFacade {
  categorias$: Observable<Categoria[]>;
  constructor(
    private productosService: ProductosService,
    private marketStore: MarketStore,
    private categoriasService: CategoriaService,
    private carritoStore: CarritoStore,
    private coreStore: CoreStore,
    private fb: FormBuilder
  ) {
    this.fetchProductos$({ page: 1 });
    this.categorias$ = this.categoriasService.findAll().pipe(
      map(res => res.data),
      shareReplay(1)
    );
    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          return this.fetchProductos$(value);
        })
      )
      .subscribe();
  }

  fetchProductos$(filter: FilterProducto) {
    this.productosService.findAll(filter).subscribe(res => {
      this.marketStore.setProductos = res.data.docs;
      this.marketStore.setPaginador = new Paginador(res.data);
      this.marketStore.setFilter = filter;
    });
    return this.marketStore.getProductos$;
  }

  get getProductos$() {
    return this.marketStore.getProductos$;
  }

  get getFilter$() {
    return this.marketStore.gerFilter$;
  }

  get getPaginador$() {
    return this.marketStore.getPaginador$;
  }

  get getCategorias$() {
    return this.categorias$;
  }

  get total$() {
    return this.carritoStore.total$;
  }

  filterForm = this.fb.group({
    page: [1, Validators.required],
    nombre: [""],
    categoria: [""]
  });

  compraForm = this.fb.group({
    usuario: [this.coreStore.userId],
    productos: [this.carritoStore.getCarrito],
    total: [this.carritoStore.total],
    direccion: [, Validators.required],
    fecha: [new Date(), Validators.required],
    hora: [null],
    factura: [null]
  });
}
