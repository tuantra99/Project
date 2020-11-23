import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ttchung } from '@app/Manager/_models';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TintucService {
  private tintucSubject: BehaviorSubject<Ttchung>;
  public ttchung: Observable<Ttchung>;

  constructor(private router: Router, private http: HttpClient) {
    this.tintucSubject = new BehaviorSubject<Ttchung>(
      JSON.parse(localStorage.getItem('ttchung'))
    );
    this.ttchung = this.tintucSubject.asObservable();
  }

  public get tintucValue(): Ttchung {
    return this.tintucSubject.value;
  }

  // tslint:disable-next-line: typedef
  register(ttchung: Ttchung) {
    return this.http.post(`${environment.apiUrl}/ttchung/register`, ttchung);
  }

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get<Ttchung[]>(`${environment.apiUrl}/ttchung`);
  }

  // tslint:disable-next-line: typedef
  getById(idTinTuc: string) {
    return this.http.get<Ttchung>(`${environment.apiUrl}/ttchung/${idTinTuc}`);
  }

  update(idTinTuc, params) {
    return this.http.put(`${environment.apiUrl}/ttchung/${idTinTuc}`, params).pipe(
      map((x) => {
        return x;
      })
    );
  }

  // tslint:disable-next-line: typedef
  delete(idTinTuc: string) {
    return this.http.delete(`${environment.apiUrl}/ttchungs/${idTinTuc}`).pipe(
      map((x) => {
        return x;
      })
    );
  }
}
