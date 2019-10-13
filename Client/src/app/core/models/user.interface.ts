import { Permisos } from './permisos.interface';
export interface User {
  id: string;
  nombre: string;
  admin: boolean;
  permisos: Permisos;
  active: boolean;
}
