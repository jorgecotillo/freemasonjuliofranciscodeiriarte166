import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
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
    _success: boolean;
    admin_form = new FormGroup({
        title : new FormControl('', Validators.required),
        message : new FormControl('', Validators.required)
    });

    constructor (private _authService: AuthService){
    }

    ngOnInit() {
    }

    onSubmit() {
       this
       .sendNotification(this.admin_form.value);
    }

    sendNotification(notification: Notification){
        
        this._success = false;
        
        this
            ._authService
            .AuthPost(
                process.env.service_endpoint + "/api/v1.0/manage/notification",
                notification)
            .map(response => response.json())
            .subscribe(response => {
                console.log('response', response);
                this._response = "Envio satisfactorio";
                this._success = true;
            });
    }
}