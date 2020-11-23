import { Component, OnInit } from '@angular/core';
import { BaoService } from '@app/Manager/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baos = null;
  constructor(
    private baoService: BaoService
  ) {}

  ngOnInit(): void {
    this.baoService
      .getAll()
      .pipe(first())
      .subscribe((baos) => (this.baos = baos));
  }
}
