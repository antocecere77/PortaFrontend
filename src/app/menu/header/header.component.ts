import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openUserMenu = false;
  openNotificationMenu = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.headerService.toggleSideNav();
  }

  toggleUserMenu(menu: string) {
    switch (menu) {
      case 'user':
          this.openUserMenu = !this.openUserMenu;
          this.openNotificationMenu = false;
          break;
      case 'notification':
          this.openNotificationMenu = !this.openNotificationMenu;
          this.openUserMenu = false;
          break;
    }
  }

}
