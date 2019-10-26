import { Usuario } from "@app/core/models";

export interface UsuariosApi {
  data: {
    docs: Array<Usuario>;
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
