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
	            .AuthGet("http://localhost:5001/api/v1.0/OrganizationChart")
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
	        providers: [auth_service_1.AuthService]
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

	module.exports = "<button (click)=\"getOrganigrama()\">Get Organigrama</button>\n\n{{ _response }}"

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


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmU0MDE1NWE0ZGQxM2NlOWNkYzciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMv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QUFLLEdBQUw7U0FDSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUMsQ0FBQztLQUVELHNDQUFNLEdBQU47U0FDSSx3QkFBd0I7S0FDNUIsQ0FBQztLQUNMLDRCQUFDO0FBQUQsRUFBQztBQWhCWSxzQkFBcUI7S0FMakMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQStCLENBQUM7U0FDbEQsUUFBUSxFQUFFLGNBQWM7TUFDM0IsQ0FBQztzQ0FJZ0MsaUJBQVEsRUFBd0IsMEJBQVc7SUFGaEUscUJBQXFCLENBZ0JqQztBQWhCWSx1REFBcUI7Ozs7Ozs7QUNUbEMsNkM7Ozs7OztBQ0FBLDBNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHFDQUFzRDtBQUN0RCx1Q0FBc0Q7QUFFdEQsOENBQTZDO0FBRzdDLEtBQWEsZ0JBQWdCO0tBRXpCLDBCQUFvQixZQUF5QixFQUFVLE9BQWU7U0FBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7U0FBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0tBQ3RFLENBQUM7S0FFRCxzQ0FBVyxHQUFYO1NBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDaEIsQ0FBQztTQUNELElBQUksRUFBQzthQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUM1QyxDQUFDO0tBQ0wsQ0FBQztLQUNMLHVCQUFDO0FBQUQsRUFBQztBQWJZLGlCQUFnQjtLQUQ1QixpQkFBVSxFQUFFO3NDQUd5QiwwQkFBVyxFQUFtQixlQUFNO0lBRjdELGdCQUFnQixDQWE1QjtBQWJZLDZDQUFnQiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZlNDAxNTVhNGRkMTNjZTljZGM3IiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGxiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmdhbmlncmFtYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsRXZlbnRzTWFuYWdlciB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyJztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIENvdW50ZXJDb21wb25lbnQsXG4gICAgICAgIEZldGNoRGF0YUNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgT3JnYW5pZ3JhbWFDb21wb25lbnQsXG4gICAgICAgIENhbGxiYWNrQ29tcG9uZW50LFxuICAgICAgICBVbmF1dGhvcml6ZWRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cbiAgICAgICAgLy9Bbmd1bGFyMkZvbnRhd2Vzb21lTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGxiYWNrJywgY29tcG9uZW50OiBDYWxsYmFja0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnb3JnYW5pZ3JhbWEnLCBjb21wb25lbnQ6IE9yZ2FuaWdyYW1hQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3VuYXV0aG9yaXplZCcsIGNvbXBvbmVudDogVW5hdXRob3JpemVkQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgTG9nZ2VyLCBBdXRoU2VydmljZSwgQXV0aEd1YXJkU2VydmljZSwgR2xvYmFsRXZlbnRzTWFuYWdlciBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgR2xvYmFsRXZlbnRzTWFuYWdlciB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXInXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xuICBcbiAgcHVibGljIF9sb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXG4gICAgICBwcml2YXRlIF9nbG9iYWxFdmVudHNNYW5hZ2VyOiBHbG9iYWxFdmVudHNNYW5hZ2VyKSB7XG4gICAgICAgICAgX2dsb2JhbEV2ZW50c01hbmFnZXIuc2hvd05hdkJhckVtaXR0ZXIuc3Vic2NyaWJlKChtb2RlKT0+e1xuICAgICAgICAgICAgLy8gbW9kZSB3aWxsIGJlIG51bGwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgY3JlYXRlZCwgc28geW91IG5lZWQgdG8gaWdvbm9yZSBpdCB3aGVuIG51bGxcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbmluTWFpbldpbmRvdygpO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpe1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc3RhcnRTaWdub3V0TWFpbldpbmRvdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuL2dsb2JhbC5ldmVudHMubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIF9tZ3I6IFVzZXJNYW5hZ2VyO1xuICBfdXNlckxvYWRlZEV2ZW50OiBFdmVudEVtaXR0ZXI8VXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXI+KCk7XG4gIF9jdXJyZW50VXNlcjogVXNlcjtcbiAgX2xvZ2dlZEluOiBib29sZWFuO1xuXG4gIF9hdXRoSGVhZGVyczogSGVhZGVycztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6SHR0cCwgXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIFxuICAgIHByaXZhdGUgX2dsb2JhbEV2ZW50c01hbmFnZXI6IEdsb2JhbEV2ZW50c01hbmFnZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAvL2luc3RhbmNlIG5lZWRzIHRvIGJlIGNyZWF0ZWQgd2l0aGluIHRoZSBpZiBjbGF1c2VcbiAgICAgIC8vb3RoZXJ3aXNlIHlvdSdsbCBnZXQgYSBzZXNzaW9uU3RvcmFnZSBub3QgZGVmaW5lZCBlcnJvci5cbiAgICAgICAgdGhpcy5fbWdyID0gbmV3IFVzZXJNYW5hZ2VyKHNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fbWdyXG4gICAgICAgIC5nZXRVc2VyKClcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWdyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQoKGUpID0+IHtcbiAgICAgICAgICAgIC8vaWYgKCFlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHVubG9hZGVkXCIpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2xlYXJTdGF0ZSgpIHtcbiAgICAgIHRoaXMuX21nci5jbGVhclN0YWxlU3RhdGUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhclN0YXRlU3RhdGUgc3VjY2Vzc1wiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIGVycm9yXCIsIGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7IFxuICAgICAgdGhpcy5fbWdyLmdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHVzZXJcIik7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KHVzZXIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVVc2VyKCkge1xuICAgICAgdGhpcy5fbWdyLnJlbW92ZVVzZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZEV2ZW50LmVtaXQobnVsbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciByZW1vdmVkXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydFNpZ25pbk1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3QoeyBkYXRhOiAnc29tZSBkYXRhJyB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduaW5SZWRpcmVjdCBkb25lXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBlbmRTaWduaW5NYWluV2luZG93KCkge1xuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgaW4gYSBwcm9taXNlIGEgZ2xvYmFsIHZhcmlhYmxlIGlzIG5vdCBhY2Nlc3NpYmxlLFxuICAgICAgLy8gICAgICBpbnN0ZWFkIGEgbWV0aG9kIHNjb3BlIHZhcmlhYmxlIGlzIHJlcXVpcmVkIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGhpblxuICAgICAgLy8gICAgICB0aGUgcHJvbWlzZS5cbiAgICAgIC8vQW5zd2VyOiB0aGUgcHJldmlvdXMgY29kZSB3YXMgdXNpbmcgZnVuY3Rpb24gKHVzZXIpIHsgfSBpbnN0ZWFkIG9mIGp1c3QgKHVzZXIpID0+XG4gICAgICAvLyAgICAgICAgYmVjYXVzZSBpcyBhIGZ1bmN0aW9uIHRoYXQgb25seSBoYXMgb25lIHBhcmFtZXRlciAodXNlcikgdGhhdCBleHBsYWluc1xuICAgICAgLy8gICAgICAgIHdoeSB0aGUgb3RoZXIgdmFyaWFibGVzIHdlcmUgdW5kZWZpbmVkLCB0aGUgZml4IHdhcyB0byB1c2UgYW4gYW5vbnltb3VzIGZ1bmN0aW9uXG4gICAgICAvLyAgICAgICAgYSBsYW1iZGEgZXhwcmVzc2lvbi5cbiAgICAgIFxuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgZXZlbiB0aG91Z2ggX21nciBoYXMgYWxyZWFkeSBiZWVuIGluc3RhbnRpYXRlZCwgSSBuZWVkIHRvIGVuY2xvc2VcbiAgICAgIC8vICAgICAgdGhlIGNhbGwgaW4gIT09IHVuZGVmaW5lZCwgcmVtb3ZpbmcgdGhlIGlmIGNsYXVzZSByZXN1bHRzIGluIGEgZmFpbHVyZSBvZiBfbWdyXG4gICAgICAvLyAgICAgIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX21nci5zaWduaW5SZWRpcmVjdENhbGxiYWNrKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpO1xuICAgICAgICAgIHRoaXMuX2dsb2JhbEV2ZW50c01hbmFnZXIuc2hvd05hdkJhcih0cnVlKTtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbiAgc3RhcnRTaWdub3V0TWFpbldpbmRvdygpIHtcbiAgICAgIHRoaXMuX21nci5zaWdub3V0UmVkaXJlY3QoKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgICAgc2V0VGltZW91dCg1MDAwLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHRvIHNlZSBpZiBmaXJlZC4uLlwiKTtcblxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZW5kU2lnbm91dE1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2soKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogRXhhbXBsZSBvZiBob3cgeW91IGNhbiBtYWtlIGF1dGggcmVxdWVzdCB1c2luZyBhbmd1bGFycyBodHRwIG1ldGhvZHMuXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aEdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aERlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfc2V0QXV0aEhlYWRlcnModXNlcjogVXNlcikge1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgdXNlci50b2tlbl90eXBlICsgXCIgXCIgKyB1c2VyLmFjY2Vzc190b2tlbik7XG4gICAgICB0aGlzLl9hdXRoSGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKHRoaXMuX2F1dGhIZWFkZXJzLmtleXNbMF0sIHRoaXMuX2F1dGhIZWFkZXJzLnZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLl9hdXRoSGVhZGVycywgYm9keTogXCJcIiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG5cbmNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gIGF1dGhvcml0eTogcHJvY2Vzcy5lbnYuYXV0aG9yaXR5LFxuICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LmNsaWVudF9pZCxcbiAgcmVkaXJlY3RfdXJpOiBwcm9jZXNzLmVudi5yZWRpcmVjdF91cmksXG4gIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICByZXNwb25zZV90eXBlOiBwcm9jZXNzLmVudi5yZXNwb25zZV90eXBlLFxuICBzY29wZTogcHJvY2Vzcy5lbnYuc2NvcGUsXG5cbiAgc2lsZW50X3JlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYuc2lsZW50X3JlZGlyZWN0X3VyaSxcbiAgLy9hdXRvbWF0aWNTaWxlbnRSZW5ldzogdHJ1ZSxcbiAgLy9zaWxlbnRSZXF1ZXN0VGltZW91dDoxMDAwMCxcblxuICBmaWx0ZXJQcm90b2NvbENsYWltczogcHJvY2Vzcy5lbnYuZmlsdGVyUHJvdG9jb2xDbGFpbXMsXG4gIGxvYWRVc2VySW5mbzogcHJvY2Vzcy5lbnYubG9hZFVzZXJJbmZvXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2lkYy1jbGllbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxFdmVudHNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgX3Nob3dOYXZCYXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XG4gICAgcHVibGljIHNob3dOYXZCYXJFbWl0dGVyOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2hvd05hdkJhci5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNob3dOYXZCYXIoaWZTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3Nob3dOYXZCYXIubmV4dChpZlNob3cpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2dsb2JhbC5ldmVudHMubWFuYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+SnVsaW8gRnJhbmNpc2NvIGRlIElyaWFydGUgMTY2PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1ob21lJz48L3NwYW4+IFF1aWVuZXMgU29tb3M/XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL29yZ2FuaWdyYW1hJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zaXRlbWFwJz48L3NwYW4+IE9yZ2FuaWdyYW1hXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FkbWluJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1sb2NrJz48L3NwYW4+IEFkbWluXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiIV9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtdXNlci1vXFxcIj48L3NwYW4+IExvZ2luXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dvdXQnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXNpZ24tb3V0Jz48L3NwYW4+IExvZ291dFxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmEtMiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtMyB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNCB7XFxuICAgIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtNSB7XFxuICAgIGZvbnQtc2l6ZTogMTJlbTtcXG59XFxuXFxuLmZhLTYge1xcbiAgICBmb250LXNpemU6IDIwZW07XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciwgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvLCB3b3JsZCEgLSBKb3JnZTwvaDE+XFxuPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nZXQuYXNwLm5ldC8nPkFTUC5ORVQgQ29yZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCc+QyM8L2E+IGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vYW5ndWxhci5pby8nPkFuZ3VsYXIgMjwvYT4gYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cXG48L3VsPlxcbjxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXG48L3VsPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZXRjaGRhdGEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YUNvbXBvbmVudCB7XG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JlY2FzdHMgPSByZXN1bHQuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcblxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxuXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxuXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxuICAgIDx0aGVhZD5cXG4gICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY3VycmVudENvdW50ID0gMTA7XG5cbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q291bnRlcjwvaDI+XFxuXFxuPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGFuIEFuZ3VsYXIgMiBjb21wb25lbnQuPC9wPlxcblxcbjxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+e3sgY3VycmVudENvdW50IH19PC9zdHJvbmc+PC9wPlxcblxcbjxidXR0b24gKGNsaWNrKT1cXFwiaW5jcmVtZW50Q291bnRlcigpXFxcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2FsbGJhY2snLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYWxsYmFja0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgICAgIF9hdXRoU2VydmljZS5lbmRTaWduaW5NYWluV2luZG93KCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZScgXG5pbXBvcnQgJ3J4anMvUngnOyAvL2ltcG9ydCBuZWVkZWQgaW4gb3JkZXIgdG8gaGF2ZSAubWFwIGZ1bmN0aW9uIGF2YWlsYWJsZVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ29yZ2FuaWdyYW1hJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vcmdhbmlncmFtYS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIE9yZ2FuaWdyYW1hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgX3Jlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xuICAgIF91c2VyOiBVc2VyO1xuICAgIF9sb2FkZWRVc2VyU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkVXNlclN1YiA9IFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgIC5fYXV0aFNlcnZpY2VcbiAgICAgICAgICAgICAgICAuX3VzZXJMb2FkZWRFdmVudFxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPcmdhbmlncmFtYSgpe1xuICAgICAgICB0aGlzXG4gICAgICAgICAgICAuX2F1dGhTZXJ2aWNlXG4gICAgICAgICAgICAuQXV0aEdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvdjEuMC9Pcmdhbml6YXRpb25DaGFydFwiKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIGlmKHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKSl7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZWRVc2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxidXR0b24gKGNsaWNrKT1cXFwiZ2V0T3JnYW5pZ3JhbWEoKVxcXCI+R2V0IE9yZ2FuaWdyYW1hPC9idXR0b24+XFxuXFxue3sgX3Jlc3BvbnNlIH19XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VuYXV0aG9yaXplZC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHNlbGVjdG9yOiAndW5hdXRob3JpemVkJ1xufSlcblxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc3RhcnRTaWduaW5NYWluV2luZG93KCk7XG4gICAgfVxuXG4gICAgZ29iYWNrKCkge1xuICAgICAgICAvLyB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgVW5hdXRob3JpemVkIFJlcXVlc3QgdG8gbG9naW4gY2xpY2sgPGEgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgaHJlZj1cXFwiI1xcXCI+aGVyZTwvYT4uXFxuPC9kaXY+XFxuPGJyPlxcbjxkaXY+XFxuICBUbyBnbyBiYWNrIGNsaWNrIDxhIChjbGljayk9XFxcImdvYmFjaygpXFxcIiBocmVmPVxcXCIjXFxcIj5oZXJlPC9hPi5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgXG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5fbG9nZ2VkSW4pIHsgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ3VuYXV0aG9yaXplZCddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJzb3VyY2VSb290IjoiIn0=