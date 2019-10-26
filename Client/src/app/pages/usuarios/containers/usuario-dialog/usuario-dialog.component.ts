import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Usuario } from "@models";
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from "@angular/forms";
import { UsuariosFacade } from "@usuarios/index";

@Component({
  selector: "app-usuario-dialog",
  templateUrl: "./usuario-dialog.component.html",
  styleUrls: ["./usuario-dialog.component.scss"]
})
export class UsuarioDialogComponent implements OnInit {
  permisosLista = ["ver", "edit", "crear"];
  constructor(
    public dialogRef: MatDialogRef<UsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string; usuario?: Usuario },
    private fb: FormBuilder,
    private usuariosFacade: UsuariosFacade
  ) {}

  ngOnInit() {
    this.data.type === "edit" ? this.direccionEdit() : null;
    this.usuarioForm.get("admin").valueChanges.subscribe(value => {
      value === false
        ? this.usuarioForm
            .get("permisos")
            .patchValue({ usuarios: null, productos: null, compras: null })
        : null;
    });
  }

  direccionGroup = data => {
    return new FormGroup({
      direccion: new FormControl(data.direccion || "", [Validators.required]),
      numero: new FormControl(data!.numero || "", [Validators.required]),
      piso: new FormControl(data!.piso || "", [Validators.required]),
      localidad: new FormControl(data!.localidad || "", [Validators.required]),
      provincia: new FormControl(data!.provincia || "", [Validators.required]),
      codigoPostal: new FormControl(data!.codigoPostal || "", [Validators.required])
    });
  };

  usuarioForm = this.fb.group({
    nombre: [
      this.data.usuario.nombre || "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
    ],
    email: [this.data.usuario.email || "", [Validators.required]],
    password: [
      this.data.usuario.password || "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
    ],
    telefono: [this.data.usuario.telefono || "", [Validators.required]],
    admin: [this.data.usuario.admin || ""],
    permisos: this.fb.group({
      usuarios: [this.data.usuario.permisos.usuarios || ""],
      productos: [this.data.usuario.permisos.productos || ""],
      compras: [this.data.usuario.permisos.compras || ""]
    }),
    active: [this.data.usuario.active || ""],
    direccion: this.fb.array([this.direccionGroup({})])
  });

  volver(): void {
    this.dialogRef.close();
  }

  direccionEdit() {
    this.direcciones.controls.pop();
    this.data.usuario.direccion.map(direccion =>
      this.direcciones.push(this.direccionGroup(direccion))
    );
  }

  get direcciones(): FormArray {
    return this.usuarioForm.get("direccion") as FormArray;
  }
  get permisos(): FormGroup {
    return this.usuarioForm.get("permisos") as FormGroup;
  }

  agregarDireccion(): void {
    this.direcciones.push(this.direccionGroup({}));
  }

  quitarDireccion(event: number): void {
    this.direcciones.controls.length > 1 ? this.direcciones.controls.splice(event, 1) : null;
  }

  postUsuario(data: Usuario) {
    console.log(data);
    this.data.type === "create"
      ? this.usuariosFacade.createUsuario(data)
      : this.usuariosFacade.postUsuario(data, this.data.usuario._id, this.dialogRef.id);
  }
}
