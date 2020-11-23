import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaoService } from '@app/Manager/_services';

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
      this.getByIdDm(this.route.snapshot.params.idDanhMuc);
  }
    // tslint:disable-next-line: typedef
    getByIdDm(idDanhMuc: string) {
      this.baoService.getByIdDm(idDanhMuc).subscribe((baos) => (this.baos = baos));
    }

}
