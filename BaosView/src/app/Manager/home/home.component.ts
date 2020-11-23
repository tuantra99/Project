import { Component } from '@angular/core';

import { User } from '@app/Manager/_models';
import { AccountService } from '@app/Manager/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
