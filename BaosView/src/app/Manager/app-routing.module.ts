import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const baosModule = () => import('./magazine/magazine.module').then(x => x.MagazineModule);
const danhMucModule = () => import('./danhmuc/danhmuc.module').then(x => x.DanhmucModule);
const tinTucModule = () => import('./tintuc/tintuc.module').then(x => x.TintucModule);


const routes: Routes = [
  { path: 'manager', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'manager/users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'manager/baos', loadChildren: baosModule, canActivate: [AuthGuard] },
  { path: 'manager/danhmuc', loadChildren: danhMucModule, canActivate: [AuthGuard] },
  { path: 'manager/tintuc', loadChildren: tinTucModule, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
