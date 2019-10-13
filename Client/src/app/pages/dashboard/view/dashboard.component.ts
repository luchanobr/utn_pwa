import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models';
import { CoreFacade } from '@app/core';
import { DashboardFacade } from '../dashboard.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navLinks: Array<string>;

  constructor() {}

  ngOnInit() {
    this.navLinks = ['usuarios', 'productos', 'compras', 'settings'];
  }
}
