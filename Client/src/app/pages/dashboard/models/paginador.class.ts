export class Paginador {
  totalDocs: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  totalPages: number;
  pagingCounter: number;
  prevPage: number;
  nextPage: number;

  constructor(data) {
    this.hasNextPage = data.hasNextPage;
    this.hasPrevPage = data.hasPrevPage;
    this.limit = data.limit;
    this.nextPage = data.nextPage;
    this.page = data.page;
    this.pagingCounter = data.pagingCounter;
    this.prevPage = data.prevPage;
    this.totalDocs = data.totalDocs;
    this.totalPages = data.totalPages;
  }
}
