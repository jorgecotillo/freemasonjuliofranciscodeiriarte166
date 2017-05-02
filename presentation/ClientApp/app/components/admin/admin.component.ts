import { Component,OnInit } from '@angular/core'
import { AuthService } from '../shared/services/auth.service' 
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import 'rxjs/Rx'; //import needed in order to have .map function available

@Component({
    template : require('./admin.component.html'),
    selector : 'admin'
})

export class AdminComponent implements OnInit{
    _user: User;
    _loadedUserSub: any;
    _response: string = "";

    constructor (private _authService: AuthService){
    }

    ngOnInit() {
    }

    public sendNotification(){
        this
            ._authService
            .AuthPost(process.env.service_endpoint + "/api/v1.0/SendNotification",
            { messageToBroadcast : "Hello" })
            .map(response => response.json())
            .subscribe(response => {
                console.log(response);
                this._response = response;
            });
    }
}