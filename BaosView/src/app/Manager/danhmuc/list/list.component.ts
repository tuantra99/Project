import { Component, OnInit } from '@angular/core';
import { DanhmucService } from '@app/Manager/_services'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dmChung = null;

  constructor(private dmChungService: DanhmucService) {}

  ngOnInit() {
      this.dmChungService.getAll()
          .pipe(first())
          .subscribe(dmChung => this.dmChung = dmChung);
  }

  deleteDanhmuc(idDanhMuc: string) {
      const dmChung = this.dmChung.find(x => x.idDanhMuc === idDanhMuc);
      dmChung.isDeleting = true;
      this.dmChungService.delete(idDanhMuc)
          .pipe(first())
          .subscribe(() => {
              this.dmChung = this.dmChung.filter(x => x.idDanhMuc !== idDanhMuc)
          });
  }
}
