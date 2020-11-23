import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'homeddd', pathMatch: 'full'},
  { path: 'homeddd', component: UploadImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadImageRoutingModule { }
