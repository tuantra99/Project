import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DmChung } from '../_models';

@Injectable({
  providedIn: 'root',
})
export class DanhmucService {
  private danhmucSubject: BehaviorSubject<DmChung>;
  public dmchung: Observable<DmChung>;

  constructor(private router: Router, private http: HttpClient) {
    this.danhmucSubject = new BehaviorSubject<DmChung>(
      JSON.parse(localStorage.getItem('dmchung'))
    );
    this.dmchung = this.danhmucSubject.asObservable();
  }

  public get danhmucValue(): DmChung {
    return this.danhmucSubject.value;
  }

  // tslint:disable-next-line: typedef
  register(dmchung: DmChung) {
    return this.http.post(`${environment.apiUrl}/dmchungs/register`, dmchung);
  }

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get<DmChung[]>(`${environment.apiUrl}/dmchungs`);
  }

  // tslint:disable-next-line: typedef
  getById(idDanhMuc: string) {
    return this.http.get<DmChung>(
      `${environment.apiUrl}/dmchungs/${idDanhMuc}`
    );
  }

  // tslint:disable-next-line: typedef
  update(idDanhMuc, params) {
    return this.http
      .put(`${environment.apiUrl}/dmchungs/${idDanhMuc}`, params)
      .pipe(
        map((x) => {
          return x;
        })
      );
  }

  // tslint:disable-next-line: typedef
  delete(idDanhMuc: string) {
    return this.http.delete(`${environment.apiUrl}/dmchungs/${idDanhMuc}`).pipe(
      map((x) => {
        return x;
      })
    );
  }
}
