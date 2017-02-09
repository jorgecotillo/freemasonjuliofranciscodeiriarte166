import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common';
import { AuthService } from '../../components/shared/services/auth.service'

@Component({
    template: require('./unauthorized.component.html'),
    selector: 'unauthorized',
    providers: [AuthService]
})

export class UnauthorizedComponent implements OnInit {

    constructor(private location:Location, private authService: AuthService) {

    }

    ngOnInit() {
    }

    login() {
        this.authService.startSigninMainWindow();
    }

    goback() {
        // this.location.back();
    }
}