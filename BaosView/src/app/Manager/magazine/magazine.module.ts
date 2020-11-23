import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MagazineRoutingModule } from './magazine-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MagazineRoutingModule,
    ReactiveFormsModule

  ]
})
export class MagazineModule { }
