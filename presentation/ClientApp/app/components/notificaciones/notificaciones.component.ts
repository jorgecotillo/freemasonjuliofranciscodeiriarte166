import { Component } from '@angular/core'
import { AuthService } from '../shared/services/auth.service' 

@Component({
    selector: 'notificaciones',
    template: require('./notificaciones.component.html'),
})

export class Notificaciones{
    public _notifications: Notification[];

    constructor (private _authService: AuthService){
        this
            ._authService
            .AuthGet(
                process.env.service_endpoint + "/api/v1.0/manage/notification")
            .map(response => response.json())
            .subscribe(response => {
                console.log('response', response);
                this._notifications = response;
            });
    }
}

interface Notification{
    Title : string;
    Message: string;
}