import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service' 

@Component({
    selector: 'organigrama',
    template: require('./organigrama.component.html'),
    providers: [AuthService]
})

export class OrganigramaComponent implements OnInit {
    public _response: string = "";
    _user: User;
    _loadedUserSub: any;

    constructor (private authService: AuthService){
        
    }

    ngOnInit() {
            this._loadedUserSub = this.authService._userLoadedEvent
            .subscribe(user => {
                this._user = user;
            });
    }

    public getOrganigrama(){
        this._response = this._user.access_token;
        //this._response = "Clicked";
        this.authService.AuthGet("http://localhost:5001/api/v1.0/OrganizationChart");

        //this._response = this._usr.access_token;
        //if (typeof window !== 'undefined') {
            //this._response = "entered";
            var url = "http://localhost:5001/api/v1.0/OrganizationChart";
            
            var xhr = new XMLHttpRequest();
            var response = "";
            xhr.open("GET", url);
            xhr.onload = function () {
                response = JSON.parse(xhr.responseText);
                //log(xhr.status, JSON.parse(xhr.responseText));
            }
            xhr.setRequestHeader("Authorization", this._user.token_type + " " + this._user.access_token);//"Bearer " + this._user.access_token);
            xhr.send();
            //this._response = response;
        //}
        //else{
            //this._response = "ccc";
        //}
    }

    ngOnDestroy(){
        if(this._loadedUserSub.unsubscribe()){
            this._loadedUserSub.unsubscribe();
        }
    }
}
