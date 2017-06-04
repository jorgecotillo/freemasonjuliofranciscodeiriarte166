import { Component, Injectable, EventEmitter, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service'
import { GlobalEventsManager } from '../shared/services/global.events.manager'

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})

export class NavMenuComponent {
  
  public _loggedIn: boolean = false;

  constructor (
      private _authService: AuthService, 
      private _globalEventsManager: GlobalEventsManager) {
          _globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
            // mode will be null the first time it is created, so you need to ignore it when null
            if (mode !== null) {
              this._loggedIn = mode;
            }
        });
  }

  public login(){
      this._authService.startSigninMainWindow();
  }

  public logout(){
      this._authService.startSignoutMainWindow();
  }

  public redirectToContent(){
      if(typeof window !== 'undefined'){
          window.location.href = process.env.content_url;
      }
  }
}
