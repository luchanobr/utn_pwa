import { Categoria } from "./categoria.interface";

export interface Producto {
  active: boolean;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  img: string;
  destacado: boolean;
  categoria: Categoria;
  _id?: string;
}
