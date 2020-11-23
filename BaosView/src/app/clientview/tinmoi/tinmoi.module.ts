import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinmoiRoutingModule } from './tinmoi-routing.module';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ ChitietComponent],
  imports: [
    CommonModule,
    TinmoiRoutingModule,
    ReactiveFormsModule
  ]
})
export class TinmoiModule { }
