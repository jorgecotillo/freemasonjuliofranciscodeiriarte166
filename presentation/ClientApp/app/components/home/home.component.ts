import 'angular2-universal-polyfills/browser'; //required to use window object.
import 'angular2-universal-polyfills';
//import { platformUniversalDynamic } from 'angular2-universal';
import { Component, Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
//import 'bootstrap';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {
    mgr: UserManager = new UserManager(settings);
    userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();
    currentUser: User;
    loggedIn: boolean = false; 
    authHeaders: Headers;

    constructor(private http: Http) {
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
    this.mgr.events.addUserUnloaded((e) => {
      //if (!environment.production) {
        console.log("user unloaded");
      //}
      this.loggedIn = false;
    });
  }
}

const settings = {
    authority: "http://localhost:5000",
    client_id: "js",
    redirect_uri: "http://localhost:4040/callback",
    response_type: "id_token token",
    scope:"openid profile api1",
    post_logout_redirect_uri : "http://localhost:4040/home",
    userStore: window.localStorage
};
