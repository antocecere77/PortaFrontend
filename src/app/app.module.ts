import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './menu/header/header.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { ExtrasComponent } from './extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentsComponent,
    MailComponent,
    HeaderComponent,
    SidenavComponent,
    ExtrasComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
