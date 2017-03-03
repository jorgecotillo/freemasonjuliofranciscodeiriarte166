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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var core_2 = __webpack_require__(7);
	var app_component_1 = __webpack_require__(8);
	var navmenu_component_1 = __webpack_require__(13);
	var home_component_1 = __webpack_require__(22);
	var fetchdata_component_1 = __webpack_require__(24);
	var counter_component_1 = __webpack_require__(26);
	var callback_component_1 = __webpack_require__(28);
	var organigrama_component_1 = __webpack_require__(30);
	var unauthorized_component_1 = __webpack_require__(33);
	var auth_service_1 = __webpack_require__(14);
	var global_events_manager_1 = __webpack_require__(17);
	var auth_guard_service_1 = __webpack_require__(36);
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
	            //Angular2FontawesomeModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'callback', component: callback_component_1.CallbackComponent },
	                { path: 'organigrama', component: organigrama_component_1.OrganigramaComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
	                { path: 'unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ],
	        providers: [core_2.Logger, auth_service_1.AuthService, auth_guard_service_1.AuthGuardService, global_events_manager_1.GlobalEventsManager],
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
/***/ function(module, exports) {

	module.exports = require("angular2-logger/core");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(9),
	        styles: [__webpack_require__(10)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(14);
	var global_events_manager_1 = __webpack_require__(17);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(_authService, _globalEventsManager) {
	        var _this = this;
	        this._authService = _authService;
	        this._globalEventsManager = _globalEventsManager;
	        this._loggedIn = false;
	        _globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
	            // mode will be null the first time it is created, so you need to igonore it when null
	            if (mode !== null) {
	                _this._loggedIn = mode;
	            }
	        });
	    }
	    NavMenuComponent.prototype.login = function () {
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
	        template: __webpack_require__(19),
	        styles: [__webpack_require__(20)]
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService,
	        global_events_manager_1.GlobalEventsManager])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 14 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(15);
	var router_1 = __webpack_require__(6);
	var oidc_client_1 = __webpack_require__(16);
	var global_events_manager_1 = __webpack_require__(17);
	var AuthService = (function () {
	    function AuthService(http, _router, _globalEventsManager) {
	        var _this = this;
	        this.http = http;
	        this._router = _router;
	        this._globalEventsManager = _globalEventsManager;
	        this._userLoadedEvent = new core_1.EventEmitter();
	        if (typeof window !== 'undefined') {
	            //instance needs to be created within the if clause
	            //otherwise you'll get a sessionStorage not defined error.
	            this._mgr = new oidc_client_1.UserManager(settings);
	            this._mgr
	                .getUser()
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
	            console.log("got user");
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
	        //TODO: Validate why in a promise a global variable is not accessible,
	        //      instead a method scope variable is required so it can be used within
	        //      the promise.
	        //Answer: the previous code was using function (user) { } instead of just (user) =>
	        //        because is a function that only has one parameter (user) that explains
	        //        why the other variables were undefined, the fix was to use an anonymous function
	        //        a lambda expression.
	        var _this = this;
	        //TODO: Validate why even though _mgr has already been instantiated, I need to enclose
	        //      the call in !== undefined, removing the if clause results in a failure of _mgr
	        //      is undefined
	        if (typeof window !== 'undefined') {
	            this._mgr.signinRedirectCallback().then(function (user) {
	                console.log("signed in");
	                _this._globalEventsManager.showNavBar(true);
	                _this._loggedIn = true;
	                _this._router.navigate(['home']);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
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
	        if (options) {
	            options = this._setRequestOptions(options);
	        }
	        else {
	            options = this._setRequestOptions();
	        }
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
	            //setting default authentication headers
	            this._setAuthHeaders(this._currentUser);
	            options = new http_1.RequestOptions({ headers: this._authHeaders, body: "" });
	        }
	        return options;
	    };
	    return AuthService;
	}());
	AuthService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http,
	        router_1.Router,
	        global_events_manager_1.GlobalEventsManager])
	], AuthService);
	exports.AuthService = AuthService;
	var settings = {
	    authority: process.env.authority,
	    client_id: process.env.client_id,
	    redirect_uri: process.env.redirect_uri,
	    post_logout_redirect_uri: process.env.post_logout_redirect_uri,
	    response_type: process.env.response_type,
	    scope: process.env.scope,
	    silent_redirect_uri: process.env.silent_redirect_uri,
	    //automaticSilentRenew: true,
	    //silentRequestTimeout:10000,
	    filterProtocolClaims: process.env.filterProtocolClaims,
	    loadUserInfo: process.env.loadUserInfo
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("oidc-client");

/***/ },
/* 17 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var BehaviorSubject_1 = __webpack_require__(18);
	var GlobalEventsManager = (function () {
	    function GlobalEventsManager() {
	        this._showNavBar = new BehaviorSubject_1.BehaviorSubject(null);
	        this.showNavBarEmitter = this._showNavBar.asObservable();
	    }
	    GlobalEventsManager.prototype.showNavBar = function (ifShow) {
	        this._showNavBar.next(ifShow);
	    };
	    return GlobalEventsManager;
	}());
	GlobalEventsManager = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], GlobalEventsManager);
	exports.GlobalEventsManager = GlobalEventsManager;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("rxjs/BehaviorSubject");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Julio Francisco de Iriarte 166</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='fa fa-home'></span> Quienes Somos?\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/organigrama']\">\n                        <span class='fa fa-sitemap'></span> Organigrama\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/admin']\">\n                        <span class='fa fa-lock'></span> Admin\n                    </a>\n                </li>\n                <li *ngIf=\"!_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"login()\" [routerLink]=\"['/login']\">\n                        <span class=\"fa fa-user-o\"></span> Login\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"logout()\" [routerLink]=\"['/logout']\">\n                        <span class='fa fa-sign-out'></span> Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(21);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n.fa-2 {\n    font-size: 2em;\n}\n\n.fa-3 {\n    font-size: 4em;\n}\n\n.fa-4 {\n    font-size: 7em;\n}\n\n.fa-5 {\n    font-size: 12em;\n}\n\n.fa-6 {\n    font-size: 20em;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(23),
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world! - Jorge</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 24 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(15);
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
	        template: __webpack_require__(25)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
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
	        template: __webpack_require__(27)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(14);
	var CallbackComponent = (function () {
	    function CallbackComponent(_authService) {
	        this._authService = _authService;
	        _authService.endSigninMainWindow();
	    }
	    return CallbackComponent;
	}());
	CallbackComponent = __decorate([
	    core_1.Component({
	        selector: 'callback',
	        template: __webpack_require__(29)
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService])
	], CallbackComponent);
	exports.CallbackComponent = CallbackComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div></div>"

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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(14);
	__webpack_require__(31); //import needed in order to have .map function available
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
	        var _this = this;
	        this
	            ._authService
	            .AuthGet(process.env.service_endpoint + "/api/v1.0/OrganizationChart")
	            .map(function (response) { return response.json(); })
	            .subscribe(function (response) {
	            console.log(response);
	            _this._response = response;
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
	        template: __webpack_require__(32),
	        styles: [__webpack_require__(37)]
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService])
	], OrganigramaComponent);
	exports.OrganigramaComponent = OrganigramaComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<button (click)=\"getOrganigrama()\">Get Organigrama</button>\n\n{{ _response }}\n\n<div class=\"content\">\n  <h1>Responsive Organization Chart</h1>\n  <figure class=\"org-chart cf\">\n    <ul class=\"administration\">\n      <li>\t\t\t\t\t\n        <ul class=\"director\">\n          <li>\n            <a href=\"#\"><span>Director</span></a>\n            <ul class=\"subdirector\">\n              <li><a href=\"#\"><span>Assistante Director</span></a></li>\n            </ul>\n            <ul class=\"departments cf\">\t\t\t\t\t\t\t\t\n              <li><a href=\"#\"><span>Administration</span></a></li>\n              \n              <li class=\"department dep-a\">\n                <a href=\"#\"><span>Department A</span></a>\n                <ul class=\"sections\">\n                  <li class=\"section\"><a href=\"#\"><span>Section A1</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section A2</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section A3</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section A4</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section A5</span></a></li>\n                </ul>\n              </li>\n              <li class=\"department dep-b\">\n                <a href=\"#\"><span>Department B</span></a>\n                <ul class=\"sections\">\n                  <li class=\"section\"><a href=\"#\"><span>Section B1</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section B2</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section B3</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section B4</span></a></li>\n                </ul>\n              </li>\n              <li class=\"department dep-c\">\n                <a href=\"#\"><span>Department C</span></a>\n                <ul class=\"sections\">\n                  <li class=\"section\"><a href=\"#\"><span>Section C1</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section C2</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section C3</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section C4</span></a></li>\n                </ul>\n              </li>\n              <li class=\"department dep-d\">\n                <a href=\"#\"><span>Department D</span></a>\n                <ul class=\"sections\">\n                  <li class=\"section\"><a href=\"#\"><span>Section D1</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section D2</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section D3</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section D4</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section D5</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section D6</span></a></li>\n                </ul>\n              </li>\n              <li class=\"department dep-e\">\n                <a href=\"#\"><span>Department E</span></a>\n                <ul class=\"sections\">\n                  <li class=\"section\"><a href=\"#\"><span>Section E1</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section E2</span></a></li>\n                  <li class=\"section\"><a href=\"#\"><span>Section E3</span></a></li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n        </ul>\t\n      </li>\n    </ul>\t\t\t\n  </figure>\n</div>"

/***/ },
/* 33 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(34);
	var auth_service_1 = __webpack_require__(14);
	var UnauthorizedComponent = (function () {
	    function UnauthorizedComponent(location, _authService) {
	        this.location = location;
	        this._authService = _authService;
	    }
	    UnauthorizedComponent.prototype.ngOnInit = function () {
	    };
	    UnauthorizedComponent.prototype.login = function () {
	        this._authService.startSigninMainWindow();
	    };
	    UnauthorizedComponent.prototype.goback = function () {
	        // this.location.back();
	    };
	    return UnauthorizedComponent;
	}());
	UnauthorizedComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(35),
	        selector: 'unauthorized'
	    }),
	    __metadata("design:paramtypes", [common_1.Location, auth_service_1.AuthService])
	], UnauthorizedComponent);
	exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div>\n  Unauthorized Request to login click <a (click)=\"login()\" href=\"#\">here</a>.\n</div>\n<br>\n<div>\n  To go back click <a (click)=\"goback()\" href=\"#\">here</a>.\n</div>"

/***/ },
/* 36 */
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var auth_service_1 = __webpack_require__(14);
	var AuthGuardService = (function () {
	    function AuthGuardService(_authService, _router) {
	        this._authService = _authService;
	        this._router = _router;
	    }
	    AuthGuardService.prototype.canActivate = function () {
	        if (this._authService._loggedIn) {
	            return true;
	        }
	        else {
	            this._router.navigate(['unauthorized']);
	        }
	    };
	    return AuthGuardService;
	}());
	AuthGuardService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
	], AuthGuardService);
	exports.AuthGuardService = AuthGuardService;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(38);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "*{\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition: relative;\n}\n\n.cf:before,\n.cf:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.cf:after {\n    clear: both;\n}\n\n/**\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n.cf {\n    *zoom: 1;\n}\n\n/* Generic styling */\n\nbody{\n\tbackground: #F5EEC9;\t\n}\n\n.content{\n\twidth: 100%;\n\tmax-width: 1142px;\n\tmargin: 0 auto;\n\tpadding: 0 20px;\n}\n\na:focus{\n\toutline: 2px dashed #f7f7f7;\n}\n\n@media all and (max-width: 767px){\n\t.content{\n\t\tpadding: 0 20px;\n\t}\t\n}\n\nul{\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style: none;\t\t\n}\n\nul a{\n\tdisplay: block;\n\tbackground: #ccc;\n\tborder: 4px solid #fff;\n\ttext-align: center;\n\toverflow: hidden;\n\tfont-size: .7em;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tcolor: #333;\n\theight: 70px;\n\tmargin-bottom: -26px;\n\tbox-shadow: 4px 4px 9px -4px rgba(0,0,0,0.4);\n\t-webkit-transition: all linear .1s;\n\t-moz-transition: all linear .1s;\n\ttransition: all linear .1s;\n}\n\n\n@media all and (max-width: 767px){\n\tul a{\n\t\tfont-size: 1em;\n\t}\n}\n\n\nul a span{\n\ttop: 50%;\n\tmargin-top: -0.7em;\n\tdisplay: block;\n}\n\n/*\n \n */\n\n.administration > li > a{\n\tmargin-bottom: 25px;\n}\n\n.director > li > a{\n\twidth: 50%;\n\tmargin: 0 auto 0px auto;\n}\n\n.subdirector:after{\n\tcontent: \"\";\n\tdisplay: block;\n\twidth: 0;\n\theight: 130px;\n\tbackground: red;\n\tborder-left: 4px solid #fff;\n\tleft: 45.45%;\n\tposition: relative;\n}\n\n.subdirector,\n.departments{\n\tposition: absolute;\n\twidth: 100%;\n}\n\n.subdirector > li:first-child,\n.departments > li:first-child{\t\n\twidth: 18.59894921190893%;\n\theight: 64px;\n\tmargin: 0 auto 92px auto;\t\t\n\tpadding-top: 25px;\n\tborder-bottom: 4px solid white;\n\tz-index: 1;\t\n}\n\n.subdirector > li:first-child{\n\tfloat: right;\n\tright: 27.2%;\n\tborder-left: 4px solid white;\n}\n\n.departments > li:first-child{\t\n\tfloat: left;\n\tleft: 27.2%;\n\tborder-right: 4px solid white;\t\n}\n\n.subdirector > li:first-child a,\n.departments > li:first-child a{\n\twidth: 100%;\n}\n\n.subdirector > li:first-child a{\t\n\tleft: 25px;\n}\n\n@media all and (max-width: 767px){\n\t.subdirector > li:first-child,\n\t.departments > li:first-child{\n\t\twidth: 40%;\t\n\t}\n\n\t.subdirector > li:first-child{\n\t\tright: 10%;\n\t\tmargin-right: 2px;\n\t}\n\n\t.subdirector:after{\n\t\tleft: 49.8%;\n\t}\n\n\t.departments > li:first-child{\n\t\tleft: 10%;\n\t\tmargin-left: 2px;\n\t}\n}\n\n\n.departments > li:first-child a{\n\tright: 25px;\n}\n\n.department:first-child,\n.departments li:nth-child(2){\n\tmargin-left: 0;\n\tclear: left;\t\n}\n\n.departments:after{\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 81.1%;\n\theight: 22px;\t\n\tborder-top: 4px solid #fff;\n\tborder-right: 4px solid #fff;\n\tborder-left: 4px solid #fff;\n\tmargin: 0 auto;\n\ttop: 130px;\n\tleft: 9.1%\n}\n\n@media all and (max-width: 767px){\n\t.departments:after{\n\t\tborder-right: none;\n\t\tleft: 0;\n\t\twidth: 49.8%;\n\t}  \n}\n\n@media all and (min-width: 768px){\n\t.department:first-child:before,\n   .department:last-child:before{\n    border:none;\n  }\n}\n\n.department:before{\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 0;\n\theight: 22px;\n\tborder-left: 4px solid white;\n\tz-index: 1;\n\ttop: -22px;\n\tleft: 50%;\n\tmargin-left: -4px;\n}\n\n.department{\n\tborder-left: 4px solid #fff;\n\twidth: 18.59894921190893%;\n\tfloat: left;\n\tmargin-left: 1.751313485113835%;\n\tmargin-bottom: 60px;\n}\n\n.lt-ie8 .department{\n\twidth: 18.25%;\n}\n\n@media all and (max-width: 767px){\n\t.department{\n\t\tfloat: none;\n\t\twidth: 100%;\n\t\tmargin-left: 0;\n\t}\n\n\t.department:before{\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 60px;\n\t\tborder-left: 4px solid white;\n\t\tz-index: 1;\n\t\ttop: -60px;\n\t\tleft: 0%;\n\t\tmargin-left: -4px;\n\t}\n\n\t.department:nth-child(2):before{\n\t\tdisplay: none;\n\t}\n}\n\n.department > a{\n\tmargin: 0 0 -26px -4px;\n\tz-index: 1;\n}\n\n.department > a:hover{\t\n\theight: 80px;\n}\n\n.department > ul{\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n}\n\n.department li{\t\n\tpadding-left: 25px;\n\tborder-bottom: 4px solid #fff;\n\theight: 80px;\t\n}\n\n.department li a{\n\tbackground: #fff;\n\ttop: 48px;\t\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 90%;\n\theight: 60px;\n\tvertical-align: middle;\n\tright: -1px;\n\tbackground-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMjUiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);\n\tbackground-image: -moz-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%) !important;\n\tbackground-image: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(0,0,0,0.25)), color-stop(100%,rgba(0,0,0,0)))!important;\n\tbackground-image: -webkit-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%)!important;\n\tbackground-image: -o-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%)!important;\n\tbackground-image: -ms-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%)!important;\n\tbackground-image: linear-gradient(135deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%)!important;\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#40000000', endColorstr='#00000000',GradientType=1 );\n}\n\n.department li a:hover{\n\tbox-shadow: 8px 8px 9px -4px rgba(0,0,0,0.1);\n\theight: 80px;\n\twidth: 95%;\n\ttop: 39px;\n\tbackground-image: none!important;\n}\n\n/* Department/ section colors */\n.department.dep-a a{ background: #FFD600; }\n.department.dep-b a{ background: #AAD4E7; }\n.department.dep-c a{ background: #FDB0FD; }\n.department.dep-d a{ background: #A3A2A2; }\n.department.dep-e a{ background: #f0f0f0; }", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmU0YmUzMTY3ODhhNTk5OWRmMjUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQuY3NzPzFiZmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUEr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QXNCLHFCQUFxQixFQUFFOztBQUU1MU0iLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZTRiZTMxNjc4OGE1OTk5ZGYyNSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JnYW5pZ3JhbWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50JztcbmltcG9ydCB7IFVuYXV0aG9yaXplZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2dsb2JhbC5ldmVudHMubWFuYWdlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE9yZ2FuaWdyYW1hQ29tcG9uZW50LFxuICAgICAgICBDYWxsYmFja0NvbXBvbmVudCxcbiAgICAgICAgVW5hdXRob3JpemVkQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIC8vQW5ndWxhcjJGb250YXdlc29tZU1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZmV0Y2gtZGF0YScsIGNvbXBvbmVudDogRmV0Y2hEYXRhQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdjYWxsYmFjaycsIGNvbXBvbmVudDogQ2FsbGJhY2tDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ29yZ2FuaWdyYW1hJywgY29tcG9uZW50OiBPcmdhbmlncmFtYUNvbXBvbmVudCwgY2FuQWN0aXZhdGU6W0F1dGhHdWFyZFNlcnZpY2VdIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd1bmF1dGhvcml6ZWQnLCBjb21wb25lbnQ6IFVuYXV0aG9yaXplZENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIExvZ2dlciwgQXV0aFNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2UsIEdsb2JhbEV2ZW50c01hbmFnZXIgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWxvZ2dlci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbiAgXG4gIHB1YmxpYyBfbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuICAgICAgcHJpdmF0ZSBfZ2xvYmFsRXZlbnRzTWFuYWdlcjogR2xvYmFsRXZlbnRzTWFuYWdlcikge1xuICAgICAgICAgIF9nbG9iYWxFdmVudHNNYW5hZ2VyLnNob3dOYXZCYXJFbWl0dGVyLnN1YnNjcmliZSgobW9kZSk9PntcbiAgICAgICAgICAgIC8vIG1vZGUgd2lsbCBiZSBudWxsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGNyZWF0ZWQsIHNvIHlvdSBuZWVkIHRvIGlnb25vcmUgaXQgd2hlbiBudWxsXG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IG1vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCl7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbm91dE1haW5XaW5kb3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBHbG9iYWxFdmVudHNNYW5hZ2VyIH0gZnJvbSAnLi9nbG9iYWwuZXZlbnRzLm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBfbWdyOiBVc2VyTWFuYWdlcjtcbiAgX3VzZXJMb2FkZWRFdmVudDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xuICBfY3VycmVudFVzZXI6IFVzZXI7XG4gIF9sb2dnZWRJbjogYm9vbGVhbjtcblxuICBfYXV0aEhlYWRlcnM6IEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOkh0dHAsIFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcbiAgICBwcml2YXRlIF9nbG9iYWxFdmVudHNNYW5hZ2VyOiBHbG9iYWxFdmVudHNNYW5hZ2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgLy9pbnN0YW5jZSBuZWVkcyB0byBiZSBjcmVhdGVkIHdpdGhpbiB0aGUgaWYgY2xhdXNlXG4gICAgICAvL290aGVyd2lzZSB5b3UnbGwgZ2V0IGEgc2Vzc2lvblN0b3JhZ2Ugbm90IGRlZmluZWQgZXJyb3IuXG4gICAgICAgIHRoaXMuX21nciA9IG5ldyBVc2VyTWFuYWdlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX21nclxuICAgICAgICAuZ2V0VXNlcigpXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlckxvYWRlZEV2ZW50LmVtaXQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21nci5ldmVudHMuYWRkVXNlclVubG9hZGVkKChlKSA9PiB7XG4gICAgICAgICAgICAvL2lmICghZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNsZWFyU3RhdGUoKSB7XG4gICAgICB0aGlzLl9tZ3IuY2xlYXJTdGFsZVN0YXRlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIHN1Y2Nlc3NcIik7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyU3RhdGVTdGF0ZSBlcnJvclwiLCBlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRVc2VyKCkgeyBcbiAgICAgIHRoaXMuX21nci5nZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB1c2VyXCIpO1xuICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVXNlcigpIHtcbiAgICAgIHRoaXMuX21nci5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KG51bGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcmVtb3ZlZFwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhcnRTaWduaW5NYWluV2luZG93KCkge1xuICAgICAgdGhpcy5fbWdyLnNpZ25pblJlZGlyZWN0KHsgZGF0YTogJ3NvbWUgZGF0YScgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmluUmVkaXJlY3QgZG9uZVwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZW5kU2lnbmluTWFpbldpbmRvdygpIHtcbiAgICAgIC8vVE9ETzogVmFsaWRhdGUgd2h5IGluIGEgcHJvbWlzZSBhIGdsb2JhbCB2YXJpYWJsZSBpcyBub3QgYWNjZXNzaWJsZSxcbiAgICAgIC8vICAgICAgaW5zdGVhZCBhIG1ldGhvZCBzY29wZSB2YXJpYWJsZSBpcyByZXF1aXJlZCBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoaW5cbiAgICAgIC8vICAgICAgdGhlIHByb21pc2UuXG4gICAgICAvL0Fuc3dlcjogdGhlIHByZXZpb3VzIGNvZGUgd2FzIHVzaW5nIGZ1bmN0aW9uICh1c2VyKSB7IH0gaW5zdGVhZCBvZiBqdXN0ICh1c2VyKSA9PlxuICAgICAgLy8gICAgICAgIGJlY2F1c2UgaXMgYSBmdW5jdGlvbiB0aGF0IG9ubHkgaGFzIG9uZSBwYXJhbWV0ZXIgKHVzZXIpIHRoYXQgZXhwbGFpbnNcbiAgICAgIC8vICAgICAgICB3aHkgdGhlIG90aGVyIHZhcmlhYmxlcyB3ZXJlIHVuZGVmaW5lZCwgdGhlIGZpeCB3YXMgdG8gdXNlIGFuIGFub255bW91cyBmdW5jdGlvblxuICAgICAgLy8gICAgICAgIGEgbGFtYmRhIGV4cHJlc3Npb24uXG4gICAgICBcbiAgICAgIC8vVE9ETzogVmFsaWRhdGUgd2h5IGV2ZW4gdGhvdWdoIF9tZ3IgaGFzIGFscmVhZHkgYmVlbiBpbnN0YW50aWF0ZWQsIEkgbmVlZCB0byBlbmNsb3NlXG4gICAgICAvLyAgICAgIHRoZSBjYWxsIGluICE9PSB1bmRlZmluZWQsIHJlbW92aW5nIHRoZSBpZiBjbGF1c2UgcmVzdWx0cyBpbiBhIGZhaWx1cmUgb2YgX21nclxuICAgICAgLy8gICAgICBpcyB1bmRlZmluZWRcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3RDYWxsYmFjaygpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKTtcbiAgICAgICAgICB0aGlzLl9nbG9iYWxFdmVudHNNYW5hZ2VyLnNob3dOYXZCYXIodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUnXSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2lnbm91dE1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbm91dFJlZGlyZWN0KCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIiwgcmVzcCk7XG4gICAgICAgIHNldFRpbWVvdXQoNTAwMCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGluZyB0byBzZWUgaWYgZmlyZWQuLi5cIik7XG5cbiAgICAgICAgfSlcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGVuZFNpZ25vdXRNYWluV2luZG93KCkge1xuICAgICAgdGhpcy5fbWdyLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIiwgcmVzcCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIEV4YW1wbGUgb2YgaG93IHlvdSBjYW4gbWFrZSBhdXRoIHJlcXVlc3QgdXNpbmcgYW5ndWxhcnMgaHR0cCBtZXRob2RzLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBpZiBvcHRpb25zIGFyZSBub3Qgc3VwcGxpZWQgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlIGlzIGFwcGxpY2F0aW9uL2pzb25cbiAgICovXG4gIEF1dGhHZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aFB1dCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGJvZHksIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBpZiBvcHRpb25zIGFyZSBub3Qgc3VwcGxpZWQgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlIGlzIGFwcGxpY2F0aW9uL2pzb25cbiAgICovXG4gIEF1dGhEZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aFBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuXG4gIHByaXZhdGUgX3NldEF1dGhIZWFkZXJzKHVzZXI6IFVzZXIpIHtcbiAgICAgIHRoaXMuX2F1dGhIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIHRoaXMuX2F1dGhIZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIHVzZXIudG9rZW5fdHlwZSArIFwiIFwiICsgdXNlci5hY2Nlc3NfdG9rZW4pO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICB9XG4gIHByaXZhdGUgX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCh0aGlzLl9hdXRoSGVhZGVycy5rZXlzWzBdLCB0aGlzLl9hdXRoSGVhZGVycy52YWx1ZXNbMF0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vc2V0dGluZyBkZWZhdWx0IGF1dGhlbnRpY2F0aW9uIGhlYWRlcnNcbiAgICAgICAgdGhpcy5fc2V0QXV0aEhlYWRlcnModGhpcy5fY3VycmVudFVzZXIpO1xuICAgICAgICBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdGhpcy5fYXV0aEhlYWRlcnMsIGJvZHk6IFwiXCIgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxufVxuXG5jb25zdCBzZXR0aW5nczogYW55ID0ge1xuICBhdXRob3JpdHk6IHByb2Nlc3MuZW52LmF1dGhvcml0eSxcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5jbGllbnRfaWQsXG4gIHJlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYucmVkaXJlY3RfdXJpLFxuICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk6IHByb2Nlc3MuZW52LnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgcmVzcG9uc2VfdHlwZTogcHJvY2Vzcy5lbnYucmVzcG9uc2VfdHlwZSxcbiAgc2NvcGU6IHByb2Nlc3MuZW52LnNjb3BlLFxuXG4gIHNpbGVudF9yZWRpcmVjdF91cmk6IHByb2Nlc3MuZW52LnNpbGVudF9yZWRpcmVjdF91cmksXG4gIC8vYXV0b21hdGljU2lsZW50UmVuZXc6IHRydWUsXG4gIC8vc2lsZW50UmVxdWVzdFRpbWVvdXQ6MTAwMDAsXG5cbiAgZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb2Nlc3MuZW52LmZpbHRlclByb3RvY29sQ2xhaW1zLFxuICBsb2FkVXNlckluZm86IHByb2Nlc3MuZW52LmxvYWRVc2VySW5mb1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9pZGMtY2xpZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2lkYy1jbGllbnRcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsRXZlbnRzTWFuYWdlciB7XG5cbiAgICBwcml2YXRlIF9zaG93TmF2QmFyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHB1YmxpYyBzaG93TmF2QmFyRW1pdHRlcjogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX3Nob3dOYXZCYXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93TmF2QmFyKGlmU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zaG93TmF2QmFyLm5leHQoaWZTaG93KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkp1bGlvIEZyYW5jaXNjbyBkZSBJcmlhcnRlIDE2NjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtaG9tZSc+PC9zcGFuPiBRdWllbmVzIFNvbW9zP1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9vcmdhbmlncmFtYSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc2l0ZW1hcCc+PC9zcGFuPiBPcmdhbmlncmFtYVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hZG1pbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbG9jayc+PC9zcGFuPiBBZG1pblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIiFfbG9nZ2VkSW5cXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ2luKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXVzZXItb1xcXCI+PC9zcGFuPiBMb2dpblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9nb3V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zaWduLW91dCc+PC9zcGFuPiBMb2dvdXRcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhLTIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhLTMge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTQge1xcbiAgICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTUge1xcbiAgICBmb250LXNpemU6IDEyZW07XFxufVxcblxcbi5mYS02IHtcXG4gICAgZm9udC1zaXplOiAyMGVtO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhIC0gSm9yZ2U8L2gxPlxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxuPC91bD5cXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxuPC91bD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXG5cXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcblxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcblxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDEwO1xuXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcblxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXG5cXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXG5cXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhbGxiYWNrJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYWxsYmFjay5jb21wb25lbnQuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FsbGJhY2tDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe1xuICAgICAgICBfYXV0aFNlcnZpY2UuZW5kU2lnbmluTWFpbldpbmRvdygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciwgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnIFxuaW1wb3J0ICdyeGpzL1J4JzsgLy9pbXBvcnQgbmVlZGVkIGluIG9yZGVyIHRvIGhhdmUgLm1hcCBmdW5jdGlvbiBhdmFpbGFibGVcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmdhbmlncmFtYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmdhbmlncmFtYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIF9yZXNwb25zZTogc3RyaW5nID0gXCJcIjtcbiAgICBfdXNlcjogVXNlcjtcbiAgICBfbG9hZGVkVXNlclN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlZFVzZXJTdWIgPSBcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuX2F1dGhTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLl91c2VyTG9hZGVkRXZlbnRcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JnYW5pZ3JhbWEoKXtcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLl9hdXRoU2VydmljZVxuICAgICAgICAgICAgLkF1dGhHZXQocHJvY2Vzcy5lbnYuc2VydmljZV9lbmRwb2ludCArIFwiL2FwaS92MS4wL09yZ2FuaXphdGlvbkNoYXJ0XCIpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgaWYodGhpcy5fbG9hZGVkVXNlclN1Yi51bnN1YnNjcmliZSgpKXtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRPcmdhbmlncmFtYSgpXFxcIj5HZXQgT3JnYW5pZ3JhbWE8L2J1dHRvbj5cXG5cXG57eyBfcmVzcG9uc2UgfX1cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gIDxoMT5SZXNwb25zaXZlIE9yZ2FuaXphdGlvbiBDaGFydDwvaDE+XFxuICA8ZmlndXJlIGNsYXNzPVxcXCJvcmctY2hhcnQgY2ZcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImFkbWluaXN0cmF0aW9uXFxcIj5cXG4gICAgICA8bGk+XFx0XFx0XFx0XFx0XFx0XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRpcmVjdG9yXFxcIj5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPkRpcmVjdG9yPC9zcGFuPjwvYT5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcInN1YmRpcmVjdG9yXFxcIj5cXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5Bc3Npc3RhbnRlIERpcmVjdG9yPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkZXBhcnRtZW50cyBjZlxcXCI+XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+QWRtaW5pc3RyYXRpb248L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGVwYXJ0bWVudCBkZXAtYVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPkRlcGFydG1lbnQgQTwvc3Bhbj48L2E+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBBMTwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gQTI8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEEzPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBBNDwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gQTU8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkZXBhcnRtZW50IGRlcC1iXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+RGVwYXJ0bWVudCBCPC9zcGFuPjwvYT5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJzZWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEIxPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBCMjwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gQjM8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEI0PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGVwYXJ0bWVudCBkZXAtY1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPkRlcGFydG1lbnQgQzwvc3Bhbj48L2E+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBDMTwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gQzI8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEMzPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBDNDwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRlcGFydG1lbnQgZGVwLWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5EZXBhcnRtZW50IEQ8L3NwYW4+PC9hPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInNlY3Rpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gRDE8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEQyPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBEMzwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gRDQ8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEQ1PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBENjwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRlcGFydG1lbnQgZGVwLWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5EZXBhcnRtZW50IEU8L3NwYW4+PC9hPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInNlY3Rpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInNlY3Rpb25cXFwiPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuPlNlY3Rpb24gRTE8L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj48YSBocmVmPVxcXCIjXFxcIj48c3Bhbj5TZWN0aW9uIEUyPC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2VjdGlvblxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+PHNwYW4+U2VjdGlvbiBFMzwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFx0XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXHRcXHRcXHRcXG4gIDwvZmlndXJlPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzZWxlY3RvcjogJ3VuYXV0aG9yaXplZCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbmluTWFpbldpbmRvdygpO1xuICAgIH1cblxuICAgIGdvYmFjaygpIHtcbiAgICAgICAgLy8gdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gIFVuYXV0aG9yaXplZCBSZXF1ZXN0IHRvIGxvZ2luIGNsaWNrIDxhIChjbGljayk9XFxcImxvZ2luKClcXFwiIGhyZWY9XFxcIiNcXFwiPmhlcmU8L2E+LlxcbjwvZGl2Plxcbjxicj5cXG48ZGl2PlxcbiAgVG8gZ28gYmFjayBjbGljayA8YSAoY2xpY2spPVxcXCJnb2JhY2soKVxcXCIgaHJlZj1cXFwiI1xcXCI+aGVyZTwvYT4uXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IFxuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fYXV0aFNlcnZpY2UuX2xvZ2dlZEluKSB7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWyd1bmF1dGhvcml6ZWQnXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vb3JnYW5pZ3JhbWEuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Y6YmVmb3JlLFxcbi5jZjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjsgLyogMSAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xcbn1cXG5cXG4uY2Y6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLyoqXFxuICogRm9yIElFIDYvNyBvbmx5XFxuICogSW5jbHVkZSB0aGlzIHJ1bGUgdG8gdHJpZ2dlciBoYXNMYXlvdXQgYW5kIGNvbnRhaW4gZmxvYXRzLlxcbiAqL1xcbi5jZiB7XFxuICAgICp6b29tOiAxO1xcbn1cXG5cXG4vKiBHZW5lcmljIHN0eWxpbmcgKi9cXG5cXG5ib2R5e1xcblxcdGJhY2tncm91bmQ6ICNGNUVFQzk7XFx0XFxufVxcblxcbi5jb250ZW50e1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTE0MnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuYTpmb2N1c3tcXG5cXHRvdXRsaW5lOiAycHggZGFzaGVkICNmN2Y3Zjc7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcXG5cXHQuY29udGVudHtcXG5cXHRcXHRwYWRkaW5nOiAwIDIwcHg7XFxuXFx0fVxcdFxcbn1cXG5cXG51bHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcdFxcdFxcbn1cXG5cXG51bCBhe1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGJhY2tncm91bmQ6ICNjY2M7XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRmb250LXNpemU6IC43ZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGNvbG9yOiAjMzMzO1xcblxcdGhlaWdodDogNzBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMjZweDtcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDlweCAtNHB4IHJnYmEoMCwwLDAsMC40KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjFzO1xcblxcdC1tb3otdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMXM7XFxuXFx0dHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMXM7XFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcXG5cXHR1bCBhe1xcblxcdFxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdH1cXG59XFxuXFxuXFxudWwgYSBzcGFue1xcblxcdHRvcDogNTAlO1xcblxcdG1hcmdpbi10b3A6IC0wLjdlbTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gXFxuICovXFxuXFxuLmFkbWluaXN0cmF0aW9uID4gbGkgPiBhe1xcblxcdG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5kaXJlY3RvciA+IGxpID4gYXtcXG5cXHR3aWR0aDogNTAlO1xcblxcdG1hcmdpbjogMCBhdXRvIDBweCBhdXRvO1xcbn1cXG5cXG4uc3ViZGlyZWN0b3I6YWZ0ZXJ7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAxMzBweDtcXG5cXHRiYWNrZ3JvdW5kOiByZWQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmZmO1xcblxcdGxlZnQ6IDQ1LjQ1JTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWJkaXJlY3RvcixcXG4uZGVwYXJ0bWVudHN7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3ViZGlyZWN0b3IgPiBsaTpmaXJzdC1jaGlsZCxcXG4uZGVwYXJ0bWVudHMgPiBsaTpmaXJzdC1jaGlsZHtcXHRcXG5cXHR3aWR0aDogMTguNTk4OTQ5MjExOTA4OTMlO1xcblxcdGhlaWdodDogNjRweDtcXG5cXHRtYXJnaW46IDAgYXV0byA5MnB4IGF1dG87XFx0XFx0XFxuXFx0cGFkZGluZy10b3A6IDI1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xcblxcdHotaW5kZXg6IDE7XFx0XFxufVxcblxcbi5zdWJkaXJlY3RvciA+IGxpOmZpcnN0LWNoaWxke1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRyaWdodDogMjcuMiU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmRlcGFydG1lbnRzID4gbGk6Zmlyc3QtY2hpbGR7XFx0XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0bGVmdDogMjcuMiU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiA0cHggc29saWQgd2hpdGU7XFx0XFxufVxcblxcbi5zdWJkaXJlY3RvciA+IGxpOmZpcnN0LWNoaWxkIGEsXFxuLmRlcGFydG1lbnRzID4gbGk6Zmlyc3QtY2hpbGQgYXtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1YmRpcmVjdG9yID4gbGk6Zmlyc3QtY2hpbGQgYXtcXHRcXG5cXHRsZWZ0OiAyNXB4O1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XFxuXFx0LnN1YmRpcmVjdG9yID4gbGk6Zmlyc3QtY2hpbGQsXFxuXFx0LmRlcGFydG1lbnRzID4gbGk6Zmlyc3QtY2hpbGR7XFxuXFx0XFx0d2lkdGg6IDQwJTtcXHRcXG5cXHR9XFxuXFxuXFx0LnN1YmRpcmVjdG9yID4gbGk6Zmlyc3QtY2hpbGR7XFxuXFx0XFx0cmlnaHQ6IDEwJTtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDJweDtcXG5cXHR9XFxuXFxuXFx0LnN1YmRpcmVjdG9yOmFmdGVye1xcblxcdFxcdGxlZnQ6IDQ5LjglO1xcblxcdH1cXG5cXG5cXHQuZGVwYXJ0bWVudHMgPiBsaTpmaXJzdC1jaGlsZHtcXG5cXHRcXHRsZWZ0OiAxMCU7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDJweDtcXG5cXHR9XFxufVxcblxcblxcbi5kZXBhcnRtZW50cyA+IGxpOmZpcnN0LWNoaWxkIGF7XFxuXFx0cmlnaHQ6IDI1cHg7XFxufVxcblxcbi5kZXBhcnRtZW50OmZpcnN0LWNoaWxkLFxcbi5kZXBhcnRtZW50cyBsaTpudGgtY2hpbGQoMil7XFxuXFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0Y2xlYXI6IGxlZnQ7XFx0XFxufVxcblxcbi5kZXBhcnRtZW50czphZnRlcntcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDgxLjElO1xcblxcdGhlaWdodDogMjJweDtcXHRcXG5cXHRib3JkZXItdG9wOiA0cHggc29saWQgI2ZmZjtcXG5cXHRib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZmZmO1xcblxcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmZjtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHR0b3A6IDEzMHB4O1xcblxcdGxlZnQ6IDkuMSVcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xcblxcdC5kZXBhcnRtZW50czphZnRlcntcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHR3aWR0aDogNDkuOCU7XFxuXFx0fSAgXFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcXG5cXHQuZGVwYXJ0bWVudDpmaXJzdC1jaGlsZDpiZWZvcmUsXFxuICAgLmRlcGFydG1lbnQ6bGFzdC1jaGlsZDpiZWZvcmV7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgfVxcbn1cXG5cXG4uZGVwYXJ0bWVudDpiZWZvcmV7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMjJweDtcXG5cXHRib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0dG9wOiAtMjJweDtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0bWFyZ2luLWxlZnQ6IC00cHg7XFxufVxcblxcbi5kZXBhcnRtZW50e1xcblxcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmZjtcXG5cXHR3aWR0aDogMTguNTk4OTQ5MjExOTA4OTMlO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdG1hcmdpbi1sZWZ0OiAxLjc1MTMxMzQ4NTExMzgzNSU7XFxuXFx0bWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLmx0LWllOCAuZGVwYXJ0bWVudHtcXG5cXHR3aWR0aDogMTguMjUlO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XFxuXFx0LmRlcGFydG1lbnR7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcblxcblxcdC5kZXBhcnRtZW50OmJlZm9yZXtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0d2lkdGg6IDA7XFxuXFx0XFx0aGVpZ2h0OiA2MHB4O1xcblxcdFxcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGU7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHR0b3A6IC02MHB4O1xcblxcdFxcdGxlZnQ6IDAlO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtNHB4O1xcblxcdH1cXG5cXG5cXHQuZGVwYXJ0bWVudDpudGgtY2hpbGQoMik6YmVmb3Jle1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4uZGVwYXJ0bWVudCA+IGF7XFxuXFx0bWFyZ2luOiAwIDAgLTI2cHggLTRweDtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4uZGVwYXJ0bWVudCA+IGE6aG92ZXJ7XFx0XFxuXFx0aGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uZGVwYXJ0bWVudCA+IHVse1xcblxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5kZXBhcnRtZW50IGxpe1xcdFxcblxcdHBhZGRpbmctbGVmdDogMjVweDtcXG5cXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcXG5cXHRoZWlnaHQ6IDgwcHg7XFx0XFxufVxcblxcbi5kZXBhcnRtZW50IGxpIGF7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHR0b3A6IDQ4cHg7XFx0XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRyaWdodDogLTFweDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUEvUGdvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqRXdNQ1VpSUdobGFXZG9kRDBpTVRBd0pTSWdkbWxsZDBKdmVEMGlNQ0F3SURFZ01TSWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpYm05dVpTSStDaUFnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKbmNtRmtMWFZqWjJjdFoyVnVaWEpoZEdWa0lpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnZURFOUlqQWxJaUI1TVQwaU1DVWlJSGd5UFNJeE1EQWxJaUI1TWowaU1UQXdKU0krQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpBbElpQnpkRzl3TFdOdmJHOXlQU0lqTURBd01EQXdJaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQXVNalVpTHo0S0lDQWdJRHh6ZEc5d0lHOW1abk5sZEQwaU1UQXdKU0lnYzNSdmNDMWpiMnh2Y2owaUl6QXdNREF3TUNJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3SWk4K0NpQWdQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtJQ0E4Y21WamRDQjRQU0l3SWlCNVBTSXdJaUIzYVdSMGFEMGlNU0lnYUdWcFoyaDBQU0l4SWlCbWFXeHNQU0oxY213b0kyZHlZV1F0ZFdOblp5MW5aVzVsY21GMFpXUXBJaUF2UGdvOEwzTjJaejQ9KTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDAsMCwwLDAuMjUpIDAlLCByZ2JhKDAsMCwwLDApIDEwMCUpICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUscmdiYSgwLDAsMCwwLjI1KSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDAsMCwwLDApKSkhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIHJnYmEoMCwwLDAsMC4yNSkgMCUscmdiYSgwLDAsMCwwKSAxMDAlKSFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgIHJnYmEoMCwwLDAsMC4yNSkgMCUscmdiYSgwLDAsMCwwKSAxMDAlKSFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDAsMCwwLDAuMjUpIDAlLHJnYmEoMCwwLDAsMCkgMTAwJSkhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICByZ2JhKDAsMCwwLDAuMjUpIDAlLHJnYmEoMCwwLDAsMCkgMTAwJSkhaW1wb3J0YW50O1xcblxcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDAwMDAwMDAnLCBlbmRDb2xvcnN0cj0nIzAwMDAwMDAwJyxHcmFkaWVudFR5cGU9MSApO1xcbn1cXG5cXG4uZGVwYXJ0bWVudCBsaSBhOmhvdmVye1xcblxcdGJveC1zaGFkb3c6IDhweCA4cHggOXB4IC00cHggcmdiYSgwLDAsMCwwLjEpO1xcblxcdGhlaWdodDogODBweDtcXG5cXHR3aWR0aDogOTUlO1xcblxcdHRvcDogMzlweDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lIWltcG9ydGFudDtcXG59XFxuXFxuLyogRGVwYXJ0bWVudC8gc2VjdGlvbiBjb2xvcnMgKi9cXG4uZGVwYXJ0bWVudC5kZXAtYSBheyBiYWNrZ3JvdW5kOiAjRkZENjAwOyB9XFxuLmRlcGFydG1lbnQuZGVwLWIgYXsgYmFja2dyb3VuZDogI0FBRDRFNzsgfVxcbi5kZXBhcnRtZW50LmRlcC1jIGF7IGJhY2tncm91bmQ6ICNGREIwRkQ7IH1cXG4uZGVwYXJ0bWVudC5kZXAtZCBheyBiYWNrZ3JvdW5kOiAjQTNBMkEyOyB9XFxuLmRlcGFydG1lbnQuZGVwLWUgYXsgYmFja2dyb3VuZDogI2YwZjBmMDsgfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=