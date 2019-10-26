import { Injectable } from "@angular/core";
import { CoreFacade } from "@app/core";
import { User, Usuario, Direccion } from "@models";
import { UsuariosServices } from "@usuarios/services/index";
import { Observable } from "rxjs";
import { UsuariosStore } from "./usuarios.store";
import { Paginador, UsuariosApi } from "@models";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertComponent } from "@shared/containers/alert/alert.component";

import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from "@angular/forms";

@Injectable()
export class UsuariosFacade {
  usuario: Usuario = { permisos: {}, direccion: [] } as Usuario;

  constructor(
    private coreFacade: CoreFacade,
    private usuariosStore: UsuariosStore,
    private usuariosServices: UsuariosServices,
    private dashboardStore: UsuariosStore,
    private dialogServices: MatDialog,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.usuarioForm.get("admin").valueChanges.subscribe(value => {
      value === false
        ? this.usuarioForm
            .get("permisos")
            .patchValue({ usuarios: null, productos: null, compras: null })
        : null;
    });
  }

  fechtUsuarios(data?) {
    this.usuariosServices.findAll(data).subscribe((res: UsuariosApi) => {
      this.usuariosStore.setUsuarios = res.data.docs;
      this.usuariosStore.setPaginador = new Paginador(res.data);
    });
  }

  get getUsuarios(): Observable<Array<Usuario>> {
    return this.usuariosStore.getUsuarios;
  }

  get getPaginador(): Observable<Paginador> {
    return this.usuariosStore.getPaginador;
  }

  postUsuario(data: Usuario, dialog) {
    this.usuariosServices.create(data).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.usuarioForm.reset();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 200500,
        panelClass: ["mt-0", "p-0", "bg-success"],
        data: { msg: "Usuario creado correctamente", type: "success" }
      });
    });
  }

  putUsuario(data: Usuario, id, dialog) {
    this.usuariosServices.edit(data, id).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.usuarioForm.reset();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 30000,
        panelClass: ["mt-0", "p-0", "bg-success"],
        data: { msg: "Usuario editado correctamente", type: "success" }
      });
    });
  }

  deleteUsuario(id) {
    this.usuariosServices.delete(id).subscribe(res => console.info(res));
  }

  editUsuario(usuario: Usuario): void {
    this.usuarioForm.patchValue(usuario);
    this.direccionEdit(usuario);
  }

  direccionGroup = (data: Direccion) => {
    return new FormGroup({
      direccion: new FormControl(data.direccion || "", [Validators.required]),
      numero: new FormControl(data.numero || "", [Validators.required]),
      piso: new FormControl(data.piso || "", [Validators.required]),
      localidad: new FormControl(data!.localidad || "", [Validators.required]),
      provincia: new FormControl(data!.provincia || "", [Validators.required]),
      codigoPostal: new FormControl(data!.codigoPostal || "", [Validators.required])
    });
  };

  usuarioForm = this.fb.group({
    nombre: [
      this.usuario.nombre || "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
    ],
    email: [this.usuario.email || "", [Validators.required]],
    password: [
      this.usuario.password || "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
    ],
    telefono: [this.usuario.telefono || "", [Validators.required]],
    admin: [this.usuario.admin || ""],
    permisos: this.fb.group({
      usuarios: [this.usuario.permisos.usuarios || ""],
      productos: [this.usuario.permisos.productos || ""],
      compras: [this.usuario.permisos.compras || ""]
    }),
    active: [this.usuario.active || ""],
    direccion: this.fb.array([this.direccionGroup({} as Direccion)])
  });

  get direcciones(): FormArray {
    return this.usuarioForm.get("direccion") as FormArray;
  }
  get permisos(): FormGroup {
    return this.usuarioForm.get("permisos") as FormGroup;
  }

  direccionEdit(usuario) {
    this.direcciones.controls.pop();
    usuario.direccion.map(direccion => this.direcciones.push(this.direccionGroup(direccion)));
  }

  agregarDireccion(): void {
    this.direcciones.push(this.direccionGroup({} as Direccion));
  }

  quitarDireccion(index: number): void {
    this.direcciones.controls.length > 1 ? this.direcciones.controls.splice(index, 1) : null;
  }
}
