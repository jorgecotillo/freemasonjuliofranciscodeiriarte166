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
    public _success: boolean;

    constructor (private _authService: AuthService){
    }

    ngOnInit() {
    }

    public sendNotification(title: string, message: string){
        this._success = false;
        var body = new Notification(title, message);
        
        this
            ._authService
            .AuthPost(
                process.env.service_endpoint + "/api/v1.0/manage/notification",
                body)
            .map(response => response.json())
            .subscribe(response => {
                console.log('response', response);
                this._response = "Envio satisfactorio";
                this._success = true;
            });
    }
}

class Notification{
    Title : string;
    Message: string;

    constructor(title: string, message: string){
        this.Title = title;
        this.Message = message;
    }
}