import { Injectable } from '@angular/core';
import { AothServices } from '@services/index';
import { Credential } from '@models/index';
import { pipe, Observable } from 'rxjs';
import { CoreStore } from '@core/core.store';
import { User } from '@models/index';

@Injectable()
export class CoreFacade {
  constructor(private aothService: AothServices, private coreStore: CoreStore) {}

  loginUser(crendential: Credential) {
    return this.aothService.login(crendential).subscribe(res => {
      this.coreStore.setUser(res.body.data);
    });
  }

  getUser(): Observable<User> {
    return this.coreStore.getUser();
  }
}
