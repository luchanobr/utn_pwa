import { Permisos } from './permisos';
import { Direccion } from './direccion';
export interface Usuario {
  _id?: string;
  active?: boolean;
  admin: boolean;
  nombre: string;
  mail: string;
  password: string;
  telefono: string;
  permisos: Permisos;
  direccion: Array<Direccion>;
  createdAt: Date;
  updatedAt: Date;
}
