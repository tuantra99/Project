import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UploadImageComponent,
    UploadComponent],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UploadImageModule { }
