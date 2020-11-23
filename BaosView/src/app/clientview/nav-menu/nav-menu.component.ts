import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaoService, DanhmucService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  dmchungs = null;
  baos = null;

  constructor(
    private dmChungService: DanhmucService,
    private baoService: BaoService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dmChungService
      .getAll()
      .pipe(first())
      .subscribe((dmchungs) => (this.dmchungs = dmchungs));
    this.getByIdTt(this.route.snapshot.params.idTinTuc);
  }
  // tslint:disable-next-line: typedef
  getByIdTt(idTinTuc: string) {
    this.baoService.getByIdTt(idTinTuc).subscribe((baos) => (this.baos = baos));
  }

  // tslint:disable-next-line: typedef
  collapse() {
    this.isExpanded = false;
  }

  // tslint:disable-next-line: typedef
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
