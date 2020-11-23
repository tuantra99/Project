import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bao, Ttchung } from '@app/Manager/_models';
import { AlertService, BaoService, TintucService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {


  // tslint:disable-next-line: new-parens
  baos = null;

  constructor(
    private route: ActivatedRoute,
    private baoService: BaoService,
  ) {}

  ngOnInit(): void {
    this.getByIdTt(this.route.snapshot.params.idTinTuc);
}
  // tslint:disable-next-line: typedef
  getByIdTt(idTinTuc: string) {
    this.baoService.getByIdTt(idTinTuc).subscribe((baos) => (this.baos = baos));
  }
}
