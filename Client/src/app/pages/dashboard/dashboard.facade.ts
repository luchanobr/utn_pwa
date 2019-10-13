import { Injectable } from '@angular/core';
import { CoreFacade } from '@app/core';
import { User, Usuario } from '@models';
import { UsuariosServices } from '@dashboard/services/index';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardFacade {
  constructor(private coreFacade: CoreFacade, private usuariosServices: UsuariosServices) {}

  setLinks(user: User) {}

  fechtUsuarios() {}
}
