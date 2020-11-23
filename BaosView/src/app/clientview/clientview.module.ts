import { NgModule } from '@angular/core';

import { ClientviewRoutingModule } from './clientview-routing.module';
import { ClientviewComponent } from './clientview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout';

@NgModule({
  declarations: [
    ClientviewComponent,
    NavMenuComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientviewRoutingModule
  ],
  bootstrap: [ClientviewComponent]
})
export class ClientviewModule { }
