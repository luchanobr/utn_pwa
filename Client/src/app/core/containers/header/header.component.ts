import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CoreFacade } from '@app/core/core.facade';
import { Observable } from 'rxjs';
import { User } from '@models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  @Output() sidenav = new EventEmitter<boolean>();

  constructor(private coreFacade: CoreFacade) {}

  ngOnInit() {
    this.user$ = this.coreFacade.getUser;
  }

  sidenavToggle() {
    this.sidenav.emit();
  }

  logout() {
    this.coreFacade.removeFromLocalStorage();
  }
}
