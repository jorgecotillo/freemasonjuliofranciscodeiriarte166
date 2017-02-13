import { Component } from '@angular/core';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { Router } from "@angular/router";

@Component({
    selector: 'callback',
    template: require('./callback.component.html')
})

export class CallbackComponent {
    constructor (private router: Router){
        
        if (typeof window !== 'undefined') { 
            new UserManager({}).signinRedirectCallback().then(function () {
                router.navigate(['home']);
            }).catch(function (e) {
                console.error(e);
            });
        }
    }
}