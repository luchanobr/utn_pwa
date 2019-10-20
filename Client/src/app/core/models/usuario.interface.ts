import { Permisos } from "./permisos.interface";
import { Direccion } from "./direccion.interface";
export interface Usuario {
  _id?: string;
  active?: boolean;
  admin: boolean;
  nombre: string;
  email: string;
  password: string;
  telefono: string;
  permisos: Permisos;
  direccion: Array<Direccion>;
  createdAt: Date;
  updatedAt: Date;
}
