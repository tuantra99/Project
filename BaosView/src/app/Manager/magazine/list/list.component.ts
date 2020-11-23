import { Component, Input, OnInit } from '@angular/core';
import { BaoService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-magazine',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   baos = null;

    constructor(private baoService: BaoService) {}

    ngOnInit(): void {
        this.baoService.getAll()
            .pipe(first())
            .subscribe(baos => this.baos = baos);
    }

    // deleteBao(tendanhmuc: string) {
    //     const bao = this.baos.find(x => x.tendanhmuc === tendanhmuc);
    //     bao.isDeleting = true;
    //     this.baoService.delete(tendanhmuc)
    //         .pipe(first())
    //         .subscribe(() => {
    //             this.baos = this.baos.filter(x => x.tendanhmuc !== tendanhmuc)
    //         });
    // }

}
