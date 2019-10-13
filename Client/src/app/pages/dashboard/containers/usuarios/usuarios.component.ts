import { Component, OnInit } from '@angular/core';
import { DashboardFacade } from '@dashboard/dashboard.facade';
import { Observable } from 'rxjs';
import { Usuario } from '@models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios$;
  columnas = ['nombre', 'email', 'telefono', 'acciones'];
  constructor(private dashboardFacade: DashboardFacade) {}

  ngOnInit() {}
}
