import { Producto } from "./producto.interface";

export interface ProductosApi {
  data: {
    docs: Array<Producto>;
    totalDocs: number;
    limit: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    page: number;
    totalPages: number;
    pagingCounter: number;
    prevPage: number;
    nextPage: number;
  };
}
