import { Component, Injectable, EventEmitter, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service'

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')],
    providers: [AuthService]
})

export class NavMenuComponent implements OnInit {
  
  public _authService: AuthService;
  public _loggedIn: boolean = false;
  _loadedUserSub: any;

  constructor (private authService: AuthService){
      this._authService = authService;
  }

  ngOnInit() {
      this._loadedUserSub = this.authService._userLoadedEvent
        .subscribe(user => {
          this._loggedIn = true;
        });
  }

  public login(){
      this.authService.startSigninMainWindow();
  }

  public logout(){
      this.authService.startSignoutMainWindow();
  }
}
