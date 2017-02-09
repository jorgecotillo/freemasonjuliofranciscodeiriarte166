import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, Log, MetadataService, User } from 'oidc-client';
//import { environment } from '../../';

@Injectable()
export class AuthService {
  _mgr: UserManager;
  _userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();
  _currentUser:User;
  _loggedIn: boolean = false;

  _authHeaders: Headers;

  constructor(private http: Http) {
    if (typeof window !== 'undefined') { 
        this._mgr = new UserManager(settings); 
        this._mgr.getUser()
        .then((user) => {
            if (user) {
                this._loggedIn = true;
                this._currentUser = user;
                this._userLoadedEvent.emit(user);
            }
            else {
                this._loggedIn = false;
            }
        })
        .catch((err) => {
            this._loggedIn = false;
        });
        this._mgr.events.addUserUnloaded((e) => {
            //if (!environment.production) {
                console.log("user unloaded");
            //}
            this._loggedIn = false;
        });
    }
  }
  clearState() {
      this._mgr.clearStaleState().then(function () {
        console.log("clearStateState success");
      }).catch(function (e) {
        console.log("clearStateState error", e.message);
      });
  }

  getUser() { 
      this._mgr.getUser().then((user) => {
        console.log("got user", user);
        this._userLoadedEvent.emit(user);
      }).catch(function (err) {
        console.log(err);
      });
  }

  removeUser() {
      this._mgr.removeUser().then(() => {
        this._userLoadedEvent.emit(null);
        console.log("user removed");
      }).catch(function (err) {
        console.log(err);
      });
  }

  startSigninMainWindow() {
      this._mgr.signinRedirect({ data: 'some data' }).then(function () {
        console.log("signinRedirect done");
      }).catch(function (err) {
        console.log(err);
      });
  }
  endSigninMainWindow() {
      this._mgr.signinRedirectCallback().then(function (user) {
        console.log("signed in", user);
      }).catch(function (err) {
        console.log(err);
      });
  }

  startSignoutMainWindow() {
      this._mgr.signoutRedirect().then(function (resp) {
        console.log("signed out", resp);
        setTimeout(5000, () => {
          console.log("testing to see if fired...");

        })
      }).catch(function (err) {
        console.log(err);
      });
  };

  endSignoutMainWindow() {
      this._mgr.signoutRedirectCallback().then(function (resp) {
        console.log("signed out", resp);
      }).catch(function (err) {
        console.log(err);
      });
  };
  /**
   * Example of how you can make auth request using angulars http methods.
   * @param options if options are not supplied the default content type is application/json
   */
  AuthGet(url: string, options?: RequestOptions): Observable<Response> {
      if (options) {
        options = this._setRequestOptions(options);
      }
      else {
        options = this._setRequestOptions();
      }
      return this.http.get(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPut(url: string, data: any, options?: RequestOptions): Observable<Response> {
      let body = JSON.stringify(data);

      if (options) {
        options = this._setRequestOptions(options);
      }
      else {
        options = this._setRequestOptions();
      }
      return this.http.put(url, body, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthDelete(url: string, options?: RequestOptions): Observable<Response> {
      if (options) {
        options = this._setRequestOptions(options);
      }
      else {
        options = this._setRequestOptions();
      }
      return this.http.delete(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPost(url: string, data: any, options?: RequestOptions): Observable<Response> {
      let body = JSON.stringify(data);

      if (options) {
        options = this._setRequestOptions(options);
      }
      else {
        options = this._setRequestOptions();
      }
      return this.http.post(url, body, options);
  }


  private _setAuthHeaders(user: any) {
      this._authHeaders = new Headers();
      this._authHeaders.append('Authorization', user.token_type + " " + user.access_token);
      this._authHeaders.append('Content-Type', 'application/json');
  }
  private _setRequestOptions(options?: RequestOptions) {
      if (options) {
        options.headers.append(this._authHeaders.keys[0], this._authHeaders.values[0]);
      }
      else {
        options = new RequestOptions({ headers: this._authHeaders, body: "" });
      }

      return options;
  }
}

const settings: any = {
  authority: 'http://localhost:5000',
  client_id: 'js',
  redirect_uri: 'http://localhost:4040/callback',
  post_logout_redirect_uri: 'http://localhost:4040/',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://localhost:4040/home',
  automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};