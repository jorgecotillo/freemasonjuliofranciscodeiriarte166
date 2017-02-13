(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var core_2 = __webpack_require__(33);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(19);
	var fetchdata_component_1 = __webpack_require__(21);
	var counter_component_1 = __webpack_require__(23);
	var callback_component_1 = __webpack_require__(25);
	var angular2_fontawesome_1 = __webpack_require__(27);
	var organigrama_component_1 = __webpack_require__(28);
	var unauthorized_component_1 = __webpack_require__(30);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            home_component_1.HomeComponent,
	            organigrama_component_1.OrganigramaComponent,
	            callback_component_1.CallbackComponent,
	            unauthorized_component_1.UnauthorizedComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            angular2_fontawesome_1.Angular2FontawesomeModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'callback', component: callback_component_1.CallbackComponent },
	                { path: 'organigrama', component: organigrama_component_1.OrganigramaComponent },
	                { path: 'unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ],
	        providers: [core_2.Logger],
	        exports: [
	            router_1.RouterModule
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(13);
	var core_2 = __webpack_require__(33);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(authService, _logger) {
	        this.authService = authService;
	        this._logger = _logger;
	        this._loggedIn = false;
	        this._authService = authService;
	    }
	    NavMenuComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._loadedUserSub = this._authService._userLoadedEvent
	            .subscribe(function (user) {
	            _this._loggedIn = true;
	        });
	    };
	    NavMenuComponent.prototype.login = function () {
	        this._logger.debug("This is a test of logger");
	        this._authService.startSigninMainWindow();
	    };
	    NavMenuComponent.prototype.logout = function () {
	        this._authService.startSignoutMainWindow();
	    };
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(16),
	        styles: [__webpack_require__(17)],
	        providers: [auth_service_1.AuthService]
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService, core_2.Logger])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(14);
	var oidc_client_1 = __webpack_require__(15);
	//import { environment } from '../../';
	var AuthService = (function () {
	    function AuthService(http) {
	        var _this = this;
	        this.http = http;
	        this._userLoadedEvent = new core_1.EventEmitter();
	        this._loggedIn = false;
	        if (typeof window !== 'undefined') {
	            //instance needs to be created within the if clause
	            //otherwise you'll get a sessionStorage not defined error.
	            this._mgr = new oidc_client_1.UserManager(settings);
	            this._mgr.getUser()
	                .then(function (user) {
	                if (user) {
	                    _this._loggedIn = true;
	                    _this._currentUser = user;
	                    _this._userLoadedEvent.emit(user);
	                }
	                else {
	                    _this._loggedIn = false;
	                }
	            })
	                .catch(function (err) {
	                _this._loggedIn = false;
	            });
	            this._mgr.events.addUserUnloaded(function (e) {
	                //if (!environment.production) {
	                console.log("user unloaded");
	                //}
	                _this._loggedIn = false;
	            });
	        }
	    }
	    AuthService.prototype.clearState = function () {
	        this._mgr.clearStaleState().then(function () {
	            console.log("clearStateState success");
	        }).catch(function (e) {
	            console.log("clearStateState error", e.message);
	        });
	    };
	    AuthService.prototype.getUser = function () {
	        var _this = this;
	        this._mgr.getUser().then(function (user) {
	            console.log("got user", user);
	            _this._userLoadedEvent.emit(user);
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    AuthService.prototype.removeUser = function () {
	        var _this = this;
	        this._mgr.removeUser().then(function () {
	            _this._userLoadedEvent.emit(null);
	            console.log("user removed");
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    AuthService.prototype.startSigninMainWindow = function () {
	        this._mgr.signinRedirect({ data: 'some data' }).then(function () {
	            console.log("signinRedirect done");
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    AuthService.prototype.endSigninMainWindow = function () {
	        this._mgr.signinRedirectCallback().then(function (user) {
	            console.log("signed in", user);
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    AuthService.prototype.startSignoutMainWindow = function () {
	        this._mgr.signoutRedirect().then(function (resp) {
	            console.log("signed out", resp);
	            setTimeout(5000, function () {
	                console.log("testing to see if fired...");
	            });
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    ;
	    AuthService.prototype.endSignoutMainWindow = function () {
	        this._mgr.signoutRedirectCallback().then(function (resp) {
	            console.log("signed out", resp);
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	    ;
	    /**
	     * Example of how you can make auth request using angulars http methods.
	     * @param options if options are not supplied the default content type is application/json
	     */
	    AuthService.prototype.AuthGet = function (url, options) {
	        console.log("Entered AuthGet");
	        if (options) {
	            options = this._setRequestOptions(options);
	        }
	        else {
	            //setting default authentication headers
	            this._setAuthHeaders(this._currentUser);
	            options = this._setRequestOptions();
	        }
	        console.log(options);
	        return this.http.get(url, options);
	    };
	    /**
	     * @param options if options are not supplied the default content type is application/json
	     */
	    AuthService.prototype.AuthPut = function (url, data, options) {
	        var body = JSON.stringify(data);
	        if (options) {
	            options = this._setRequestOptions(options);
	        }
	        else {
	            //setting default authentication headers
	            this._setAuthHeaders(this._currentUser);
	            options = this._setRequestOptions();
	        }
	        return this.http.put(url, body, options);
	    };
	    /**
	     * @param options if options are not supplied the default content type is application/json
	     */
	    AuthService.prototype.AuthDelete = function (url, options) {
	        if (options) {
	            options = this._setRequestOptions(options);
	        }
	        else {
	            //setting default authentication headers
	            this._setAuthHeaders(this._currentUser);
	            options = this._setRequestOptions();
	        }
	        return this.http.delete(url, options);
	    };
	    /**
	     * @param options if options are not supplied the default content type is application/json
	     */
	    AuthService.prototype.AuthPost = function (url, data, options) {
	        var body = JSON.stringify(data);
	        if (options) {
	            options = this._setRequestOptions(options);
	        }
	        else {
	            //setting default authentication headers
	            this._setAuthHeaders(this._currentUser);
	            options = this._setRequestOptions();
	        }
	        return this.http.post(url, body, options);
	    };
	    AuthService.prototype._setAuthHeaders = function (user) {
	        this._authHeaders = new http_1.Headers();
	        this._authHeaders.append('Authorization', user.token_type + " " + user.access_token);
	        this._authHeaders.append('Content-Type', 'application/json');
	    };
	    AuthService.prototype._setRequestOptions = function (options) {
	        if (options) {
	            options.headers.append(this._authHeaders.keys[0], this._authHeaders.values[0]);
	        }
	        else {
	            options = new http_1.RequestOptions({ headers: this._authHeaders, body: "" });
	        }
	        console.log("About to show headers");
	        console.log(this._authHeaders);
	        console.log(options);
	        return options;
	    };
	    return AuthService;
	}());
	AuthService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], AuthService);
	exports.AuthService = AuthService;
	var settings = {
	    authority: 'http://localhost:5000',
	    client_id: 'js',
	    redirect_uri: 'http://localhost:4040/callback',
	    post_logout_redirect_uri: 'http://localhost:4040/',
	    response_type: 'id_token token',
	    scope: 'openid profile email api1',
	    silent_redirect_uri: 'http://localhost:4040/',
	    automaticSilentRenew: true,
	    //silentRequestTimeout:10000,
	    filterProtocolClaims: true,
	    loadUserInfo: true
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("oidc-client");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    {{ txt }}\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Julio Francisco de Iriarte 166</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Quienes Somos?\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/organigrama']\">\n                        <span class='glyphicon glyphicon-education'></span> Organigrama\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/admin']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Admin\n                    </a>\n                </li>\n                <li *ngIf=\"!_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"login()\" [routerLink]=\"['/login']\">\n                        <span class=\"glyphicon glyphicon-user\"></span> Login\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"logout()\" [routerLink]=\"['/logout']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(18);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(20)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world! - Jorge</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(14);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(22)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 10;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(24)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var oidc_client_1 = __webpack_require__(15);
	var router_1 = __webpack_require__(6);
	var CallbackComponent = (function () {
	    function CallbackComponent(router) {
	        this.router = router;
	        if (typeof window !== 'undefined') {
	            new oidc_client_1.UserManager({}).signinRedirectCallback().then(function () {
	                router.navigate(['home']);
	            }).catch(function (e) {
	                console.error(e);
	            });
	        }
	    }
	    return CallbackComponent;
	}());
	CallbackComponent = __decorate([
	    core_1.Component({
	        selector: 'callback',
	        template: __webpack_require__(26)
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], CallbackComponent);
	exports.CallbackComponent = CallbackComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div></div>"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("angular2-fontawesome/angular2-fontawesome");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(13);
	__webpack_require__(37); //import needed in order to have .map function available
	var OrganigramaComponent = (function () {
	    function OrganigramaComponent(_authService) {
	        this._authService = _authService;
	        this._response = "";
	    }
	    OrganigramaComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._loadedUserSub =
	            this
	                ._authService
	                ._userLoadedEvent
	                .subscribe(function (user) {
	                _this._user = user;
	            });
	    };
	    OrganigramaComponent.prototype.getOrganigrama = function () {
	        this
	            ._authService
	            .AuthGet("http://localhost:5001/api/v1.0/OrganizationChart")
	            .map(function (response) { return response.json(); })
	            .subscribe(function (response) {
	            console.log(response);
	        });
	    };
	    OrganigramaComponent.prototype.ngOnDestroy = function () {
	        if (this._loadedUserSub.unsubscribe()) {
	            this._loadedUserSub.unsubscribe();
	        }
	    };
	    return OrganigramaComponent;
	}());
	OrganigramaComponent = __decorate([
	    core_1.Component({
	        selector: 'organigrama',
	        template: __webpack_require__(29),
	        providers: [auth_service_1.AuthService]
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService])
	], OrganigramaComponent);
	exports.OrganigramaComponent = OrganigramaComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<button (click)=\"getOrganigrama()\">Get Organigrama</button>\n\n{{ _response }}"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(31);
	var auth_service_1 = __webpack_require__(13);
	var UnauthorizedComponent = (function () {
	    function UnauthorizedComponent(location, authService) {
	        this.location = location;
	        this.authService = authService;
	    }
	    UnauthorizedComponent.prototype.ngOnInit = function () {
	    };
	    UnauthorizedComponent.prototype.login = function () {
	        this.authService.startSigninMainWindow();
	    };
	    UnauthorizedComponent.prototype.goback = function () {
	        // this.location.back();
	    };
	    return UnauthorizedComponent;
	}());
	UnauthorizedComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(32),
	        selector: 'unauthorized',
	        providers: [auth_service_1.AuthService]
	    }),
	    __metadata("design:paramtypes", [common_1.Location, auth_service_1.AuthService])
	], UnauthorizedComponent);
	exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div>\n  Unauthorized Request to login click <a (click)=\"login()\">here</a>.\n</div>\n<br>\n<div>\n  To go back click <a (click)=\"goback()\">here</a>.\n</div>"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	//# sourceMappingURL=core.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	(function (Level) {
	    Level[Level["OFF"] = 0] = "OFF";
	    Level[Level["ERROR"] = 1] = "ERROR";
	    Level[Level["WARN"] = 2] = "WARN";
	    Level[Level["INFO"] = 3] = "INFO";
	    Level[Level["DEBUG"] = 4] = "DEBUG";
	    Level[Level["LOG"] = 5] = "LOG";
	})(exports.Level || (exports.Level = {}));
	var Level = exports.Level;
	//# sourceMappingURL=level.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var level_1 = __webpack_require__(34);
	var Options = (function () {
	    function Options() {
	    }
	    return Options;
	}());
	exports.Options = Options;
	var CONSOLE_DEBUG_METHOD = console["debug"] ? "debug" : "log";
	var DEFAULT_OPTIONS = {
	    level: level_1.Level.WARN,
	    global: true,
	    globalAs: "logger",
	    store: false,
	    storeAs: "angular2.logger.level"
	};
	var Logger = (function () {
	    function Logger(options) {
	        var _this = this;
	        this.Level = level_1.Level;
	        this._loadLevel = function () { if(typeof window !== 'undefined') { return Number(localStorage.getItem(_this._storeAs)); } };
	        this.global = function () { if(typeof window !== 'undefined') { return window[_this._globalAs] = _this; } };
	        this.isErrorEnabled = function () { return _this.level >= level_1.Level.ERROR; };
	        this.isWarnEnabled = function () { return _this.level >= level_1.Level.WARN; };
	        this.isInfoEnabled = function () { return _this.level >= level_1.Level.INFO; };
	        this.isDebugEnabled = function () { return _this.level >= level_1.Level.DEBUG; };
	        this.isLogEnabled = function () { return _this.level >= level_1.Level.LOG; };
	        var _a = Object.assign({}, DEFAULT_OPTIONS, options), level = _a.level, global = _a.global, globalAs = _a.globalAs, store = _a.store, storeAs = _a.storeAs;
	        this._level = level;
	        this._globalAs = globalAs;
	        this._storeAs = storeAs;
	        global && this.global();
	        if (store || this._loadLevel())
	            this.store();
	    }
	    Logger.prototype._storeLevel = function (level) { localStorage[this._storeAs] = level; };
	    Logger.prototype.error = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        this.isErrorEnabled() && console.error.apply(console, arguments);
	    };
	    Logger.prototype.warn = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        this.isWarnEnabled() && console.warn.apply(console, arguments);
	    };
	    Logger.prototype.info = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        this.isInfoEnabled() && console.info.apply(console, arguments);
	    };
	    Logger.prototype.debug = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        this.isDebugEnabled() && console[CONSOLE_DEBUG_METHOD].apply(console, arguments);
	    };
	    Logger.prototype.log = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        this.isLogEnabled() && console.log.apply(console, arguments);
	    };
	    Logger.prototype.store = function () {
	        this._store = true;
	        var storedLevel = this._loadLevel();
	        if (storedLevel) {
	            this._level = storedLevel;
	        }
	        else {
	            this._storeLevel(this.level);
	        }
	        return this;
	    };
	    Logger.prototype.unstore = function () {
	        this._store = false;
	        localStorage.removeItem(this._storeAs);
	        return this;
	    };
	    Object.defineProperty(Logger.prototype, "level", {
	        get: function () { return this._level; },
	        set: function (level) {
	            this._store && this._storeLevel(level);
	            this._level = level;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Logger = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [Options])
	    ], Logger);
	    return Logger;
	}());
	exports.Logger = Logger;
	//# sourceMappingURL=logger.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(35);
	var level_1 = __webpack_require__(34);
	exports.OFF_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.OFF } }, logger_1.Logger];
	exports.ERROR_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.ERROR } }, logger_1.Logger];
	exports.WARN_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.WARN } }, logger_1.Logger];
	exports.INFO_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.INFO } }, logger_1.Logger];
	exports.DEBUG_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.DEBUG } }, logger_1.Logger];
	exports.LOG_LOGGER_PROVIDERS = [{ provide: logger_1.Options, useValue: { level: level_1.Level.LOG } }, logger_1.Logger];
	//# sourceMappingURL=providers.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdmOGI3MGViNmU3ZDcyZjUwMTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2lkYy1jbGllbnRcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWZvbnRhd2Vzb21lL2FuZ3VsYXIyLWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItbG9nZ2VyL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1sb2dnZXIvYXBwL2NvcmUvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1sb2dnZXIvYXBwL2NvcmUvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItbG9nZ2VyL2FwcC9jb3JlL3Byb3ZpZGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxF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Q0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdUNBQXVDLDJCQUEyQixFQUFFO0FBQ3JHLG9DQUFtQyx1Q0FBdUMsNkJBQTZCLEVBQUU7QUFDekcsbUNBQWtDLHVDQUF1Qyw0QkFBNEIsRUFBRTtBQUN2RyxtQ0FBa0MsdUNBQXVDLDRCQUE0QixFQUFFO0FBQ3ZHLG9DQUFtQyx1Q0FBdUMsNkJBQTZCLEVBQUU7QUFDekcsa0NBQWlDLHVDQUF1QywyQkFBMkIsRUFBRTtBQUNyRyxzQzs7Ozs7O0FDVEEscUMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyN2Y4YjcwZWI2ZTdkNzJmNTAxNiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhcjJGb250YXdlc29tZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLWZvbnRhd2Vzb21lL2FuZ3VsYXIyLWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgT3JnYW5pZ3JhbWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50J1xuaW1wb3J0IHsgVW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50J1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE9yZ2FuaWdyYW1hQ29tcG9uZW50LFxuICAgICAgICBDYWxsYmFja0NvbXBvbmVudCxcbiAgICAgICAgVW5hdXRob3JpemVkQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEFuZ3VsYXIyRm9udGF3ZXNvbWVNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsbGJhY2snLCBjb21wb25lbnQ6IENhbGxiYWNrQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdvcmdhbmlncmFtYScsIGNvbXBvbmVudDogT3JnYW5pZ3JhbWFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3VuYXV0aG9yaXplZCcsIGNvbXBvbmVudDogVW5hdXRob3JpemVkQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgTG9nZ2VyIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV0sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBwdWJsaWMgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgcHVibGljIF9sb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuICBfbG9hZGVkVXNlclN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXIpe1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5fbG9hZGVkVXNlclN1YiA9IHRoaXMuX2F1dGhTZXJ2aWNlLl91c2VyTG9hZGVkRXZlbnRcbiAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCl7XG4gICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJUaGlzIGlzIGEgdGVzdCBvZiBsb2dnZXJcIik7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbm91dE1haW5XaW5kb3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIgfSBmcm9tICdvaWRjLWNsaWVudCc7XG4vL2ltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgX21ncjogVXNlck1hbmFnZXI7XG4gIF91c2VyTG9hZGVkRXZlbnQ6IEV2ZW50RW1pdHRlcjxVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcj4oKTtcbiAgX2N1cnJlbnRVc2VyOiBVc2VyO1xuICBfbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBfYXV0aEhlYWRlcnM6IEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgLy9pbnN0YW5jZSBuZWVkcyB0byBiZSBjcmVhdGVkIHdpdGhpbiB0aGUgaWYgY2xhdXNlXG4gICAgICAvL290aGVyd2lzZSB5b3UnbGwgZ2V0IGEgc2Vzc2lvblN0b3JhZ2Ugbm90IGRlZmluZWQgZXJyb3IuXG4gICAgICAgIHRoaXMuX21nciA9IG5ldyBVc2VyTWFuYWdlcihzZXR0aW5ncyk7IFxuICAgICAgICB0aGlzLl9tZ3IuZ2V0VXNlcigpXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlckxvYWRlZEV2ZW50LmVtaXQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21nci5ldmVudHMuYWRkVXNlclVubG9hZGVkKChlKSA9PiB7XG4gICAgICAgICAgICAvL2lmICghZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNsZWFyU3RhdGUoKSB7XG4gICAgICB0aGlzLl9tZ3IuY2xlYXJTdGFsZVN0YXRlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIHN1Y2Nlc3NcIik7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyU3RhdGVTdGF0ZSBlcnJvclwiLCBlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRVc2VyKCkgeyBcbiAgICAgIHRoaXMuX21nci5nZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB1c2VyXCIsIHVzZXIpO1xuICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVXNlcigpIHtcbiAgICAgIHRoaXMuX21nci5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KG51bGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcmVtb3ZlZFwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhcnRTaWduaW5NYWluV2luZG93KCkge1xuICAgICAgdGhpcy5fbWdyLnNpZ25pblJlZGlyZWN0KHsgZGF0YTogJ3NvbWUgZGF0YScgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmluUmVkaXJlY3QgZG9uZVwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIGVuZFNpZ25pbk1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3RDYWxsYmFjaygpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgaW5cIiwgdXNlcik7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0U2lnbm91dE1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbm91dFJlZGlyZWN0KCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIiwgcmVzcCk7XG4gICAgICAgIHNldFRpbWVvdXQoNTAwMCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGluZyB0byBzZWUgaWYgZmlyZWQuLi5cIik7XG5cbiAgICAgICAgfSlcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGVuZFNpZ25vdXRNYWluV2luZG93KCkge1xuICAgICAgdGhpcy5fbWdyLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIiwgcmVzcCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIEV4YW1wbGUgb2YgaG93IHlvdSBjYW4gbWFrZSBhdXRoIHJlcXVlc3QgdXNpbmcgYW5ndWxhcnMgaHR0cCBtZXRob2RzLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBpZiBvcHRpb25zIGFyZSBub3Qgc3VwcGxpZWQgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlIGlzIGFwcGxpY2F0aW9uL2pzb25cbiAgICovXG4gIEF1dGhHZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVudGVyZWQgQXV0aEdldFwiKTtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL3NldHRpbmcgZGVmYXVsdCBhdXRoZW50aWNhdGlvbiBoZWFkZXJzXG4gICAgICAgIHRoaXMuX3NldEF1dGhIZWFkZXJzKHRoaXMuX2N1cnJlbnRVc2VyKTtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aFB1dCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoRGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuXG4gIHByaXZhdGUgX3NldEF1dGhIZWFkZXJzKHVzZXI6IGFueSkge1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgdXNlci50b2tlbl90eXBlICsgXCIgXCIgKyB1c2VyLmFjY2Vzc190b2tlbik7XG4gICAgICB0aGlzLl9hdXRoSGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKHRoaXMuX2F1dGhIZWFkZXJzLmtleXNbMF0sIHRoaXMuX2F1dGhIZWFkZXJzLnZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuX2F1dGhIZWFkZXJzLCBib2R5OiBcIlwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJBYm91dCB0byBzaG93IGhlYWRlcnNcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9hdXRoSGVhZGVycyk7XG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG5cbmNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gIGF1dGhvcml0eTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXG4gIGNsaWVudF9pZDogJ2pzJyxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDQwL2NhbGxiYWNrJyxcbiAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDQwLycsXG4gIHJlc3BvbnNlX3R5cGU6ICdpZF90b2tlbiB0b2tlbicsXG4gIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwgYXBpMScsXG5cbiAgc2lsZW50X3JlZGlyZWN0X3VyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDA0MC8nLFxuICBhdXRvbWF0aWNTaWxlbnRSZW5ldzogdHJ1ZSxcbiAgLy9zaWxlbnRSZXF1ZXN0VGltZW91dDoxMDAwMCxcblxuICBmaWx0ZXJQcm90b2NvbENsYWltczogdHJ1ZSxcbiAgbG9hZFVzZXJJbmZvOiB0cnVlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2lkYy1jbGllbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICB7eyB0eHQgfX1cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+SnVsaW8gRnJhbmNpc2NvIGRlIElyaWFydGUgMTY2PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gUXVpZW5lcyBTb21vcz9cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJfbG9nZ2VkSW5cXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvb3JnYW5pZ3JhbWEnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZWR1Y2F0aW9uJz48L3NwYW4+IE9yZ2FuaWdyYW1hXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2ZldGNoLWRhdGEnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBGZXRjaCBkYXRhXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FkbWluJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gQWRtaW5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCIhX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvc3Bhbj4gTG9naW5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJfbG9nZ2VkSW5cXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ291dCgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2xvZ291dCddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IExvZ291dFxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhIC0gSm9yZ2U8L2gxPlxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxuPC91bD5cXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxuPC91bD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXG5cXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcblxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcblxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDEwO1xuXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcblxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXG5cXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXG5cXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjYWxsYmFjaycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FsbGJhY2suY29tcG9uZW50Lmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENhbGxiYWNrQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgICAgICBuZXcgVXNlck1hbmFnZXIoe30pLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2soKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWZvbnRhd2Vzb21lL2FuZ3VsYXIyLWZvbnRhd2Vzb21lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItZm9udGF3ZXNvbWUvYW5ndWxhcjItZm9udGF3ZXNvbWVcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciwgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnIFxuaW1wb3J0ICdyeGpzL1J4JzsgLy9pbXBvcnQgbmVlZGVkIGluIG9yZGVyIHRvIGhhdmUgLm1hcCBmdW5jdGlvbiBhdmFpbGFibGVcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmdhbmlncmFtYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmdhbmlncmFtYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIF9yZXNwb25zZTogc3RyaW5nID0gXCJcIjtcbiAgICBfdXNlcjogVXNlcjtcbiAgICBfbG9hZGVkVXNlclN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlZFVzZXJTdWIgPSBcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuX2F1dGhTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLl91c2VyTG9hZGVkRXZlbnRcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JnYW5pZ3JhbWEoKXtcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLl9hdXRoU2VydmljZVxuICAgICAgICAgICAgLkF1dGhHZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDEvYXBpL3YxLjAvT3JnYW5pemF0aW9uQ2hhcnRcIilcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgaWYodGhpcy5fbG9hZGVkVXNlclN1Yi51bnN1YnNjcmliZSgpKXtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRPcmdhbmlncmFtYSgpXFxcIj5HZXQgT3JnYW5pZ3JhbWE8L2J1dHRvbj5cXG5cXG57eyBfcmVzcG9uc2UgfX1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sJyksXG4gICAgc2VsZWN0b3I6ICd1bmF1dGhvcml6ZWQnLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc3RhcnRTaWduaW5NYWluV2luZG93KCk7XG4gICAgfVxuXG4gICAgZ29iYWNrKCkge1xuICAgICAgICAvLyB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgVW5hdXRob3JpemVkIFJlcXVlc3QgdG8gbG9naW4gY2xpY2sgPGEgKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+aGVyZTwvYT4uXFxuPC9kaXY+XFxuPGJyPlxcbjxkaXY+XFxuICBUbyBnbyBiYWNrIGNsaWNrIDxhIChjbGljayk9XFxcImdvYmFjaygpXFxcIj5oZXJlPC9hPi5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vYXBwL2NvcmUvbGV2ZWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hcHAvY29yZS9sb2dnZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hcHAvY29yZS9wcm92aWRlcnNcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1sb2dnZXIvY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbihmdW5jdGlvbiAoTGV2ZWwpIHtcclxuICAgIExldmVsW0xldmVsW1wiT0ZGXCJdID0gMF0gPSBcIk9GRlwiO1xyXG4gICAgTGV2ZWxbTGV2ZWxbXCJFUlJPUlwiXSA9IDFdID0gXCJFUlJPUlwiO1xyXG4gICAgTGV2ZWxbTGV2ZWxbXCJXQVJOXCJdID0gMl0gPSBcIldBUk5cIjtcclxuICAgIExldmVsW0xldmVsW1wiSU5GT1wiXSA9IDNdID0gXCJJTkZPXCI7XHJcbiAgICBMZXZlbFtMZXZlbFtcIkRFQlVHXCJdID0gNF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMZXZlbFtMZXZlbFtcIkxPR1wiXSA9IDVdID0gXCJMT0dcIjtcclxufSkoZXhwb3J0cy5MZXZlbCB8fCAoZXhwb3J0cy5MZXZlbCA9IHt9KSk7XHJcbnZhciBMZXZlbCA9IGV4cG9ydHMuTGV2ZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxldmVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1sb2dnZXIvYXBwL2NvcmUvbGV2ZWwuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIF9fcGFyYW0gPSAodGhpcyAmJiB0aGlzLl9fcGFyYW0pIHx8IGZ1bmN0aW9uIChwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBsZXZlbF8xID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XHJcbnZhciBPcHRpb25zID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT3B0aW9ucztcclxufSgpKTtcclxuZXhwb3J0cy5PcHRpb25zID0gT3B0aW9ucztcclxudmFyIENPTlNPTEVfREVCVUdfTUVUSE9EID0gY29uc29sZVtcImRlYnVnXCJdID8gXCJkZWJ1Z1wiIDogXCJsb2dcIjtcclxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcclxuICAgIGxldmVsOiBsZXZlbF8xLkxldmVsLldBUk4sXHJcbiAgICBnbG9iYWw6IHRydWUsXHJcbiAgICBnbG9iYWxBczogXCJsb2dnZXJcIixcclxuICAgIHN0b3JlOiBmYWxzZSxcclxuICAgIHN0b3JlQXM6IFwiYW5ndWxhcjIubG9nZ2VyLmxldmVsXCJcclxufTtcclxudmFyIExvZ2dlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMb2dnZXIob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5MZXZlbCA9IGxldmVsXzEuTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fbG9hZExldmVsID0gZnVuY3Rpb24gKCkgeyBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKF90aGlzLl9zdG9yZUFzKSk7IH0gfTtcclxuICAgICAgICB0aGlzLmdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvd1tfdGhpcy5fZ2xvYmFsQXNdID0gX3RoaXM7IH0gfTtcclxuICAgICAgICB0aGlzLmlzRXJyb3JFbmFibGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGV2ZWwgPj0gbGV2ZWxfMS5MZXZlbC5FUlJPUjsgfTtcclxuICAgICAgICB0aGlzLmlzV2FybkVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sZXZlbCA+PSBsZXZlbF8xLkxldmVsLldBUk47IH07XHJcbiAgICAgICAgdGhpcy5pc0luZm9FbmFibGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGV2ZWwgPj0gbGV2ZWxfMS5MZXZlbC5JTkZPOyB9O1xyXG4gICAgICAgIHRoaXMuaXNEZWJ1Z0VuYWJsZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sZXZlbCA+PSBsZXZlbF8xLkxldmVsLkRFQlVHOyB9O1xyXG4gICAgICAgIHRoaXMuaXNMb2dFbmFibGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGV2ZWwgPj0gbGV2ZWxfMS5MZXZlbC5MT0c7IH07XHJcbiAgICAgICAgdmFyIF9hID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSwgbGV2ZWwgPSBfYS5sZXZlbCwgZ2xvYmFsID0gX2EuZ2xvYmFsLCBnbG9iYWxBcyA9IF9hLmdsb2JhbEFzLCBzdG9yZSA9IF9hLnN0b3JlLCBzdG9yZUFzID0gX2Euc3RvcmVBcztcclxuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMuX2dsb2JhbEFzID0gZ2xvYmFsQXM7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVBcyA9IHN0b3JlQXM7XHJcbiAgICAgICAgZ2xvYmFsICYmIHRoaXMuZ2xvYmFsKCk7XHJcbiAgICAgICAgaWYgKHN0b3JlIHx8IHRoaXMuX2xvYWRMZXZlbCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlKCk7XHJcbiAgICB9XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLl9zdG9yZUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7IGxvY2FsU3RvcmFnZVt0aGlzLl9zdG9yZUFzXSA9IGxldmVsOyB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbmFsUGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNFcnJvckVuYWJsZWQoKSAmJiBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1dhcm5FbmFibGVkKCkgJiYgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0luZm9FbmFibGVkKCkgJiYgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbmFsUGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNEZWJ1Z0VuYWJsZWQoKSAmJiBjb25zb2xlW0NPTlNPTEVfREVCVUdfTUVUSE9EXS5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0xvZ0VuYWJsZWQoKSAmJiBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuc3RvcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdG9yZWRMZXZlbCA9IHRoaXMuX2xvYWRMZXZlbCgpO1xyXG4gICAgICAgIGlmIChzdG9yZWRMZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sZXZlbCA9IHN0b3JlZExldmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmVMZXZlbCh0aGlzLmxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS51bnN0b3JlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3JlID0gZmFsc2U7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmVBcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvZ2dlci5wcm90b3R5cGUsIFwibGV2ZWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmUgJiYgdGhpcy5fc3RvcmVMZXZlbChsZXZlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBMb2dnZXIgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgICAgIF9fcGFyYW0oMCwgY29yZV8xLk9wdGlvbmFsKCkpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtPcHRpb25zXSlcclxuICAgIF0sIExvZ2dlcik7XHJcbiAgICByZXR1cm4gTG9nZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLkxvZ2dlciA9IExvZ2dlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1sb2dnZXIvYXBwL2NvcmUvbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGxvZ2dlcl8xID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xyXG52YXIgbGV2ZWxfMSA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xyXG5leHBvcnRzLk9GRl9MT0dHRVJfUFJPVklERVJTID0gW3sgcHJvdmlkZTogbG9nZ2VyXzEuT3B0aW9ucywgdXNlVmFsdWU6IHsgbGV2ZWw6IGxldmVsXzEuTGV2ZWwuT0ZGIH0gfSwgbG9nZ2VyXzEuTG9nZ2VyXTtcclxuZXhwb3J0cy5FUlJPUl9MT0dHRVJfUFJPVklERVJTID0gW3sgcHJvdmlkZTogbG9nZ2VyXzEuT3B0aW9ucywgdXNlVmFsdWU6IHsgbGV2ZWw6IGxldmVsXzEuTGV2ZWwuRVJST1IgfSB9LCBsb2dnZXJfMS5Mb2dnZXJdO1xyXG5leHBvcnRzLldBUk5fTE9HR0VSX1BST1ZJREVSUyA9IFt7IHByb3ZpZGU6IGxvZ2dlcl8xLk9wdGlvbnMsIHVzZVZhbHVlOiB7IGxldmVsOiBsZXZlbF8xLkxldmVsLldBUk4gfSB9LCBsb2dnZXJfMS5Mb2dnZXJdO1xyXG5leHBvcnRzLklORk9fTE9HR0VSX1BST1ZJREVSUyA9IFt7IHByb3ZpZGU6IGxvZ2dlcl8xLk9wdGlvbnMsIHVzZVZhbHVlOiB7IGxldmVsOiBsZXZlbF8xLkxldmVsLklORk8gfSB9LCBsb2dnZXJfMS5Mb2dnZXJdO1xyXG5leHBvcnRzLkRFQlVHX0xPR0dFUl9QUk9WSURFUlMgPSBbeyBwcm92aWRlOiBsb2dnZXJfMS5PcHRpb25zLCB1c2VWYWx1ZTogeyBsZXZlbDogbGV2ZWxfMS5MZXZlbC5ERUJVRyB9IH0sIGxvZ2dlcl8xLkxvZ2dlcl07XHJcbmV4cG9ydHMuTE9HX0xPR0dFUl9QUk9WSURFUlMgPSBbeyBwcm92aWRlOiBsb2dnZXJfMS5PcHRpb25zLCB1c2VWYWx1ZTogeyBsZXZlbDogbGV2ZWxfMS5MZXZlbC5MT0cgfSB9LCBsb2dnZXJfMS5Mb2dnZXJdO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm92aWRlcnMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLWxvZ2dlci9hcHAvY29yZS9wcm92aWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=