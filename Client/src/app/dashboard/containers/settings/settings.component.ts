import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/core/models';
import { CoreFacade } from '@core/index';
import { DashboardFacade } from '@dashboard/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: Observable<User>;
  constructor(private coreFacade: CoreFacade, private dashboardFacade: DashboardFacade) {}

  ngOnInit() {
    this.user = this.coreFacade.getUser();
  }
}
