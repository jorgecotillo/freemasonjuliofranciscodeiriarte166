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

    public sendNotification(title: string, message: string){

        var body = new Notification(title, message);
        
        this
            ._authService
            .AuthPost(
                process.env.service_endpoint + "/api/v1.0/manage/notification",
                body)
            .map(response => response.json())
            .subscribe(response => {
                console.log(response);
                this._response = response;
            });
    }
}

class Notification{
    title : string;
    message: string;

    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
    }
}