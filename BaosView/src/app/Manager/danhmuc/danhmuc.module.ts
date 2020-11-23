import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucRoutingModule } from './danhmuc-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    DanhmucRoutingModule,
    ReactiveFormsModule
  ]
})
export class DanhmucModule { }
