import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietComponent } from './chitiet/chitiet.component';
import { LayoutComponent } from '@app/Client/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'danhmuc/:idDanhMuc', component: ChitietComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanhmucRoutingModule {}
