import { Component, OnInit } from '@angular/core';
import { User } from '@app/Manager/_models';
import { AccountService, DanhmucService } from '@app/Manager/_services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private dmChungService: DanhmucService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  isExpanded = false;
  dmchungs = null;
  user: User;

  // tslint:disable-next-line: typedef
  collapse() {
    this.isExpanded = false;
  }

  // tslint:disable-next-line: typedef
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.dmChungService
      .getAll()
      .pipe(first())
      .subscribe((dmchungs) => (this.dmchungs = dmchungs));
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.accountService.logout();
  }
}
