import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  closeSideNav = false;
  sideNavChanged = new Subject<boolean>();

  constructor() { }

  toggleSideNav() {
    this.closeSideNav = !this.closeSideNav;
    this.sideNavChanged.next(this.closeSideNav);
  }
}
