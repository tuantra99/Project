import { Component, OnInit } from '@angular/core';
import { TintucService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ttChung = null;

  constructor(private ttChungService: TintucService) {}

  ngOnInit() {
      this.ttChungService.getAll()
          .pipe(first())
          .subscribe(ttChung => this.ttChung = ttChung);
  }

  deleteTintuc(idTinTuc: string) {
      const ttChung = this.ttChung.find(x => x.idTinTuc === idTinTuc);
      ttChung.isDeleting = true;
      this.ttChungService.delete(idTinTuc)
          .pipe(first())
          .subscribe(() => {
              this.ttChung = this.ttChung.filter(x => x.idDanhMuc !== idTinTuc)
          });
  }
}
