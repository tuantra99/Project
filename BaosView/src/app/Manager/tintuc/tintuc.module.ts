import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TintucRoutingModule } from './tintuc-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
  declarations: [AddEditComponent, ListComponent, LayoutComponent],
  imports: [
    CommonModule,
    TintucRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DropDownListModule,
    ButtonModule
  ]
})
export class TintucModule { }
