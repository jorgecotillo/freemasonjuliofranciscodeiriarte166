//import 'angular2-universal-polyfills/browser'; //NOTE: required to use window object.
//import 'angular2-universal-polyfills';
//import { platformUniversalDynamic } from 'angular2-universal';
import { Component, Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
//import 'bootstrap';
//import {  } from 'bootstrap'
//import 'angular2-universal-polyfills/browser';
//import { enableProdMode } from '@angular/core';
//import { _document } from 'angular2-universal';
//import { AppModule } from './components/app/app.component';
//import 'bootstrap';
//import { LocalStorage } from '../local-storage'

//declare var local: any;


@Component({
    selector: 'home',
    template: require('./home.component.html'),
    //providers: [LocalStorage]
})

export class HomeComponent {
  public entered = false;
  userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();
  currentUser: User;
  public loggedIn: boolean = false; 
  authHeaders: Headers;
  mgr: UserManager;

  constructor (private http: Http){
    if (typeof window !== 'undefined') { 
      this.entered = true;
      this.mgr = new UserManager({ 
        authority: "http://localhost:5000",
        client_id: "js",
        redirect_uri: "http://localhost:4040/callback",
        response_type: "id_token token",
        scope: "openid profile api1",
        post_logout_redirect_uri : "http://localhost:4040/home"
        //userStore : localStorage --> 
        //not needed since by default will use InMemoryStorage. 
        //when enabling localStorage, no page got displayed.

      });

      this.mgr.getUser()
      .then((user) => {
        if (user) {
          this.loggedIn = true;
          this.currentUser = user;
          this.userLoadedEvent.emit(user);
        }
        else {
          this.loggedIn = false;
        }
      })
      .catch((err) => {
        this.loggedIn = false;
      });
    }
  }

  public login(){
    this.mgr.signinRedirect();
  }
}
