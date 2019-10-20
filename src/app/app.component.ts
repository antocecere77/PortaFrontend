import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from './menu/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  closeSideNav = false;
  subscription: Subscription;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
     this.subscription = this.headerService.sideNavChanged.subscribe(
        (res: boolean ) => {
          this.closeSideNav = res;
        }
     );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
