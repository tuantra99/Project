import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Bao } from '@app/Manager/_models';
@Injectable({
  providedIn: 'root'
})
export class BaoService {
  private baoSubject: BehaviorSubject<Bao>;
  public bao: Observable<Bao>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.baoSubject = new BehaviorSubject<Bao>(JSON.parse(localStorage.getItem('bao')));
    this.bao = this.baoSubject.asObservable();
  }

  public get baoValue(): Bao {
    return this.baoSubject.value;
  }

  // tslint:disable-next-line: typedef
  getAll() {
  return this.http.get<Bao[]>(`${environment.apiUrl}/tintuc`);
  }

  // tslint:disable-next-line: typedef
  getByIdTt(idTinTuc: string) {
    return this.http.get<Bao>(`${environment.apiUrl}/tintuc/tintuc/${idTinTuc}`);
  }

  // tslint:disable-next-line: typedef
  getByIdDm(idDanhMuc: string) {
    return this.http.get<Bao>(`${environment.apiUrl}/tintuc/danhmuc/${idDanhMuc}`);
  }
}
