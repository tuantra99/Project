import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

const tinmoi = () => import('../clientview/tinmoi/tinmoi.module').then(x => x.TinmoiModule);
const danhmuc = () => import('../clientview/danhmuc/danhmuc.module').then(x => x.DanhmucModule);
const test1 = () => import('../clientview/upload-image/upload-image.module').then(x => x.UploadImageModule);

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test1', loadChildren: test1},
  { path: '', loadChildren: tinmoi},
  { path: '', loadChildren: danhmuc},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientviewRoutingModule { }
