import { Permisos } from './permisos';
export interface User {
  id: string;
  nombre: string;
  admin: boolean;
  permisos: Permisos;
  active: boolean;
}
