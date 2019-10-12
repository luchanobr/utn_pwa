import { Injectable } from '@angular/core';
import { CoreFacade } from '@app/core';
import { User } from '@models/index';

@Injectable()
export class DashboardFacade {
  constructor(private coreFacade: CoreFacade) {}

  setLinks(user: User) {}
}
