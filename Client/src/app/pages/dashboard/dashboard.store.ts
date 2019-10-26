import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "@models";
import { distinctUntilChanged } from "rxjs/operators";
import { Paginador } from "../../core/models/paginador.class";

@Injectable()
export class DashboardStore {
  constructor() {}

  private usuarios$ = new BehaviorSubject<Array<Usuario>>(null);
  private paginador$ = new BehaviorSubject<Paginador>(null);

  set setUsuarios(usuarios: Array<Usuario>) {
    this.usuarios$.next(usuarios);
  }

  get getUsuarios(): Observable<Array<Usuario>> {
    return this.usuarios$.asObservable().pipe(distinctUntilChanged());
  }

  set setPaginador(paginador: Paginador) {
    this.paginador$.next(paginador);
  }

  get getPaginador(): Observable<Paginador> {
    return this.paginador$.asObservable().pipe(distinctUntilChanged());
  }
}
