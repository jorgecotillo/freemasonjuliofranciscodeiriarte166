import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service' 
import 'rxjs/Rx'; //import needed in order to have .map function available

@Component({
    selector: 'organigrama',
    template: require('./organigrama.component.html'),
    styles: [require('./organigrama.component.css')]
})

export class OrganigramaComponent implements OnInit {
    public _response: string = "";
    _user: User;
    _loadedUserSub: any;

    constructor (private _authService: AuthService){
    }

    ngOnInit() {
        this._loadedUserSub = 
            this
                ._authService
                ._userLoadedEvent
                .subscribe(user => {
                    this._user = user;
                });
    }

    public getOrganigrama(){
        this
            ._authService
            .AuthGet(process.env.service_endpoint + "/api/v1.0/OrganizationChart")
            .map(response => response.json())
            .subscribe(response => {
                console.log(response);
                this._response = response;
            });
    }

    ngOnDestroy(){
        if(this._loadedUserSub.unsubscribe()){
            this._loadedUserSub.unsubscribe();
        }
    }
}
