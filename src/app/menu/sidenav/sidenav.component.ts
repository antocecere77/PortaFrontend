import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  closeAppMenu = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAppMenu() {
    this.closeAppMenu = !this.closeAppMenu;
  }

}
