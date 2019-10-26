import { Injectable } from "@angular/core";
import { CoreFacade } from "@app/core";

@Injectable()
export class DashboardFacade {
  constructor(private coreFacade: CoreFacade) {}
}
