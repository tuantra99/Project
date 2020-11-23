import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucRoutingModule } from './danhmuc-routing.module';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChitietComponent],
  imports: [
    CommonModule,
    DanhmucRoutingModule,
    ReactiveFormsModule
  ]
})
export class DanhmucModule { }
