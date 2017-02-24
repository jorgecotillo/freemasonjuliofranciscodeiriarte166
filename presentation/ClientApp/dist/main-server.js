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
	    authority: 'http://localhost:5000',
	    client_id: 'js',
	    redirect_uri: 'http://localhost:4040/callback',
	    post_logout_redirect_uri: 'http://localhost:4040/home',
	    response_type: 'id_token token',
	    scope: 'openid profile email api1',
	    silent_redirect_uri: 'http://localhost:4040/home',
	    //automaticSilentRenew: true,
	    //silentRequestTimeout:10000,
	    filterProtocolClaims: true,
	    loadUserInfo: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRiMjM4M2Q0OWZkNzI0ZmNmNjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMv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QUMsRUFBK0IsQ0FBQztTQUNsRCxRQUFRLEVBQUUsY0FBYztNQUMzQixDQUFDO3NDQUlnQyxpQkFBUSxFQUF3QiwwQkFBVztJQUZoRSxxQkFBcUIsQ0FnQmpDO0FBaEJZLHVEQUFxQjs7Ozs7OztBQ1RsQyw2Qzs7Ozs7O0FDQUEsME07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQXNEO0FBQ3RELHVDQUFzRDtBQUV0RCw4Q0FBNkM7QUFHN0MsS0FBYSxnQkFBZ0I7S0FFekIsMEJBQW9CLFlBQXlCLEVBQVUsT0FBZTtTQUFsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtTQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7S0FDdEUsQ0FBQztLQUVELHNDQUFXLEdBQVg7U0FDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNoQixDQUFDO1NBQ0QsSUFBSSxFQUFDO2FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzVDLENBQUM7S0FDTCxDQUFDO0tBQ0wsdUJBQUM7QUFBRCxFQUFDO0FBYlksaUJBQWdCO0tBRDVCLGlCQUFVLEVBQUU7c0NBR3lCLDBCQUFXLEVBQW1CLGVBQU07SUFGN0QsZ0JBQWdCLENBYTVCO0FBYlksNkNBQWdCIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTRiMjM4M2Q0OWZkNzI0ZmNmNjciLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImFuZ3VsYXIyLWxvZ2dlci9jb3JlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZldGNoRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsbGJhY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50JztcbmltcG9ydCB7IE9yZ2FuaWdyYW1hQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxFdmVudHNNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBPcmdhbmlncmFtYUNvbXBvbmVudCxcbiAgICAgICAgQ2FsbGJhY2tDb21wb25lbnQsXG4gICAgICAgIFVuYXV0aG9yaXplZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICAvL0FuZ3VsYXIyRm9udGF3ZXNvbWVNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsbGJhY2snLCBjb21wb25lbnQ6IENhbGxiYWNrQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdvcmdhbmlncmFtYScsIGNvbXBvbmVudDogT3JnYW5pZ3JhbWFDb21wb25lbnQsIGNhbkFjdGl2YXRlOltBdXRoR3VhcmRTZXJ2aWNlXSB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndW5hdXRob3JpemVkJywgY29tcG9uZW50OiBVbmF1dGhvcml6ZWRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBMb2dnZXIsIEF1dGhTZXJ2aWNlLCBBdXRoR3VhcmRTZXJ2aWNlLCBHbG9iYWxFdmVudHNNYW5hZ2VyIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWxvZ2dlci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgR2xvYmFsRXZlbnRzTWFuYWdlciB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXInXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xuICBcbiAgcHVibGljIF9sb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXG4gICAgICBwcml2YXRlIF9nbG9iYWxFdmVudHNNYW5hZ2VyOiBHbG9iYWxFdmVudHNNYW5hZ2VyKSB7XG4gICAgICAgICAgX2dsb2JhbEV2ZW50c01hbmFnZXIuc2hvd05hdkJhckVtaXR0ZXIuc3Vic2NyaWJlKChtb2RlKT0+e1xuICAgICAgICAgICAgLy8gbW9kZSB3aWxsIGJlIG51bGwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgY3JlYXRlZCwgc28geW91IG5lZWQgdG8gaWdvbm9yZSBpdCB3aGVuIG51bGxcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbmluTWFpbldpbmRvdygpO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpe1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc3RhcnRTaWdub3V0TWFpbldpbmRvdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuL2dsb2JhbC5ldmVudHMubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIF9tZ3I6IFVzZXJNYW5hZ2VyO1xuICBfdXNlckxvYWRlZEV2ZW50OiBFdmVudEVtaXR0ZXI8VXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXI+KCk7XG4gIF9jdXJyZW50VXNlcjogVXNlcjtcbiAgX2xvZ2dlZEluOiBib29sZWFuO1xuXG4gIF9hdXRoSGVhZGVyczogSGVhZGVycztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6SHR0cCwgXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIFxuICAgIHByaXZhdGUgX2dsb2JhbEV2ZW50c01hbmFnZXI6IEdsb2JhbEV2ZW50c01hbmFnZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAvL2luc3RhbmNlIG5lZWRzIHRvIGJlIGNyZWF0ZWQgd2l0aGluIHRoZSBpZiBjbGF1c2VcbiAgICAgIC8vb3RoZXJ3aXNlIHlvdSdsbCBnZXQgYSBzZXNzaW9uU3RvcmFnZSBub3QgZGVmaW5lZCBlcnJvci5cbiAgICAgICAgdGhpcy5fbWdyID0gbmV3IFVzZXJNYW5hZ2VyKHNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fbWdyXG4gICAgICAgIC5nZXRVc2VyKClcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWdyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQoKGUpID0+IHtcbiAgICAgICAgICAgIC8vaWYgKCFlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHVubG9hZGVkXCIpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2xlYXJTdGF0ZSgpIHtcbiAgICAgIHRoaXMuX21nci5jbGVhclN0YWxlU3RhdGUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhclN0YXRlU3RhdGUgc3VjY2Vzc1wiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIGVycm9yXCIsIGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7IFxuICAgICAgdGhpcy5fbWdyLmdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHVzZXJcIik7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KHVzZXIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVVc2VyKCkge1xuICAgICAgdGhpcy5fbWdyLnJlbW92ZVVzZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZEV2ZW50LmVtaXQobnVsbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciByZW1vdmVkXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydFNpZ25pbk1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3QoeyBkYXRhOiAnc29tZSBkYXRhJyB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduaW5SZWRpcmVjdCBkb25lXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBlbmRTaWduaW5NYWluV2luZG93KCkge1xuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgaW4gYSBwcm9taXNlIGEgZ2xvYmFsIHZhcmlhYmxlIGlzIG5vdCBhY2Nlc3NpYmxlLFxuICAgICAgLy8gICAgICBpbnN0ZWFkIGEgbWV0aG9kIHNjb3BlIHZhcmlhYmxlIGlzIHJlcXVpcmVkIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGhpblxuICAgICAgLy8gICAgICB0aGUgcHJvbWlzZS5cbiAgICAgIC8vQW5zd2VyOiB0aGUgcHJldmlvdXMgY29kZSB3YXMgdXNpbmcgZnVuY3Rpb24gKHVzZXIpIHsgfSBpbnN0ZWFkIG9mIGp1c3QgKHVzZXIpID0+XG4gICAgICAvLyAgICAgICAgYmVjYXVzZSBpcyBhIGZ1bmN0aW9uIHRoYXQgb25seSBoYXMgb25lIHBhcmFtZXRlciAodXNlcikgdGhhdCBleHBsYWluc1xuICAgICAgLy8gICAgICAgIHdoeSB0aGUgb3RoZXIgdmFyaWFibGVzIHdlcmUgdW5kZWZpbmVkLCB0aGUgZml4IHdhcyB0byB1c2UgYW4gYW5vbnltb3VzIGZ1bmN0aW9uXG4gICAgICAvLyAgICAgICAgYSBsYW1iZGEgZXhwcmVzc2lvbi5cbiAgICAgIFxuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgZXZlbiB0aG91Z2ggX21nciBoYXMgYWxyZWFkeSBiZWVuIGluc3RhbnRpYXRlZCwgSSBuZWVkIHRvIGVuY2xvc2VcbiAgICAgIC8vICAgICAgdGhlIGNhbGwgaW4gIT09IHVuZGVmaW5lZCwgcmVtb3ZpbmcgdGhlIGlmIGNsYXVzZSByZXN1bHRzIGluIGEgZmFpbHVyZSBvZiBfbWdyXG4gICAgICAvLyAgICAgIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX21nci5zaWduaW5SZWRpcmVjdENhbGxiYWNrKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpO1xuICAgICAgICAgIHRoaXMuX2dsb2JhbEV2ZW50c01hbmFnZXIuc2hvd05hdkJhcih0cnVlKTtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbiAgc3RhcnRTaWdub3V0TWFpbldpbmRvdygpIHtcbiAgICAgIHRoaXMuX21nci5zaWdub3V0UmVkaXJlY3QoKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgICAgc2V0VGltZW91dCg1MDAwLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHRvIHNlZSBpZiBmaXJlZC4uLlwiKTtcblxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZW5kU2lnbm91dE1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2soKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogRXhhbXBsZSBvZiBob3cgeW91IGNhbiBtYWtlIGF1dGggcmVxdWVzdCB1c2luZyBhbmd1bGFycyBodHRwIG1ldGhvZHMuXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aEdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aERlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfc2V0QXV0aEhlYWRlcnModXNlcjogVXNlcikge1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgdXNlci50b2tlbl90eXBlICsgXCIgXCIgKyB1c2VyLmFjY2Vzc190b2tlbik7XG4gICAgICB0aGlzLl9hdXRoSGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKHRoaXMuX2F1dGhIZWFkZXJzLmtleXNbMF0sIHRoaXMuX2F1dGhIZWFkZXJzLnZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLl9hdXRoSGVhZGVycywgYm9keTogXCJcIiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG5cbmNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gIGF1dGhvcml0eTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXG4gIGNsaWVudF9pZDogJ2pzJyxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDQwL2NhbGxiYWNrJyxcbiAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDQwL2hvbWUnLFxuICByZXNwb25zZV90eXBlOiAnaWRfdG9rZW4gdG9rZW4nLFxuICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsIGFwaTEnLFxuXG4gIHNpbGVudF9yZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwNDAvaG9tZScsXG4gIC8vYXV0b21hdGljU2lsZW50UmVuZXc6IHRydWUsXG4gIC8vc2lsZW50UmVxdWVzdFRpbWVvdXQ6MTAwMDAsXG5cbiAgZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHRydWUsXG4gIGxvYWRVc2VySW5mbzogdHJ1ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9pZGMtY2xpZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2lkYy1jbGllbnRcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsRXZlbnRzTWFuYWdlciB7XG5cbiAgICBwcml2YXRlIF9zaG93TmF2QmFyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHB1YmxpYyBzaG93TmF2QmFyRW1pdHRlcjogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX3Nob3dOYXZCYXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93TmF2QmFyKGlmU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zaG93TmF2QmFyLm5leHQoaWZTaG93KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkp1bGlvIEZyYW5jaXNjbyBkZSBJcmlhcnRlIDE2NjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtaG9tZSc+PC9zcGFuPiBRdWllbmVzIFNvbW9zP1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9vcmdhbmlncmFtYSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc2l0ZW1hcCc+PC9zcGFuPiBPcmdhbmlncmFtYVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hZG1pbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbG9jayc+PC9zcGFuPiBBZG1pblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIiFfbG9nZ2VkSW5cXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ2luKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXVzZXItb1xcXCI+PC9zcGFuPiBMb2dpblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9nb3V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zaWduLW91dCc+PC9zcGFuPiBMb2dvdXRcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxubGkubGluay1hY3RpdmUgYSxcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mYS0yIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYS0zIHtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxufVxcblxcbi5mYS00IHtcXG4gICAgZm9udC1zaXplOiA3ZW07XFxufVxcblxcbi5mYS01IHtcXG4gICAgZm9udC1zaXplOiAxMmVtO1xcbn1cXG5cXG4uZmEtNiB7XFxuICAgIGZvbnQtc2l6ZTogMjBlbTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SGVsbG8sIHdvcmxkISAtIEpvcmdlPC9oMT5cXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXG48dWw+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcbjwvdWw+XFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXG48dWw+XFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcbjwvdWw+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZldGNoZGF0YScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRmV0Y2hEYXRhQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcbiAgICAgICAgaHR0cC5nZXQoJy9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xuICAgIHN1bW1hcnk6IHN0cmluZztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XFxuXFxuPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLjwvcD5cXG5cXG48cCAqbmdJZj1cXFwiIWZvcmVjYXN0c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXG5cXG48dGFibGUgY2xhc3M9J3RhYmxlJyAqbmdJZj1cXFwiZm9yZWNhc3RzXFxcIj5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cXG4gICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3RoZWFkPlxcbiAgICA8dGJvZHk+XFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZm9yZWNhc3Qgb2YgZm9yZWNhc3RzXFxcIj5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnN1bW1hcnkgfX08L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY291bnRlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQge1xuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAxMDtcblxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCsrO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Db3VudGVyPC9oMj5cXG5cXG48cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYW4gQW5ndWxhciAyIGNvbXBvbmVudC48L3A+XFxuXFxuPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57eyBjdXJyZW50Q291bnQgfX08L3N0cm9uZz48L3A+XFxuXFxuPGJ1dHRvbiAoY2xpY2spPVxcXCJpbmNyZW1lbnRDb3VudGVyKClcXFwiPkluY3JlbWVudDwvYnV0dG9uPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjYWxsYmFjaycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FsbGJhY2suY29tcG9uZW50Lmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENhbGxiYWNrQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXtcbiAgICAgICAgX2F1dGhTZXJ2aWNlLmVuZFNpZ25pbk1haW5XaW5kb3coKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyBcbmltcG9ydCAncnhqcy9SeCc7IC8vaW1wb3J0IG5lZWRlZCBpbiBvcmRlciB0byBoYXZlIC5tYXAgZnVuY3Rpb24gYXZhaWxhYmxlXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb3JnYW5pZ3JhbWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5odG1sJyksXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgT3JnYW5pZ3JhbWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBfcmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG4gICAgX3VzZXI6IFVzZXI7XG4gICAgX2xvYWRlZFVzZXJTdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9sb2FkZWRVc2VyU3ViID0gXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgLl9hdXRoU2VydmljZVxuICAgICAgICAgICAgICAgIC5fdXNlckxvYWRlZEV2ZW50XG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE9yZ2FuaWdyYW1hKCl7XG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC5fYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5BdXRoR2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAxL2FwaS92MS4wL09yZ2FuaXphdGlvbkNoYXJ0XCIpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgaWYodGhpcy5fbG9hZGVkVXNlclN1Yi51bnN1YnNjcmliZSgpKXtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRPcmdhbmlncmFtYSgpXFxcIj5HZXQgT3JnYW5pZ3JhbWE8L2J1dHRvbj5cXG5cXG57eyBfcmVzcG9uc2UgfX1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sJyksXG4gICAgc2VsZWN0b3I6ICd1bmF1dGhvcml6ZWQnXG59KVxuXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgICB9XG5cbiAgICBnb2JhY2soKSB7XG4gICAgICAgIC8vIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICBVbmF1dGhvcml6ZWQgUmVxdWVzdCB0byBsb2dpbiBjbGljayA8YSAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBocmVmPVxcXCIjXFxcIj5oZXJlPC9hPi5cXG48L2Rpdj5cXG48YnI+XFxuPGRpdj5cXG4gIFRvIGdvIGJhY2sgY2xpY2sgPGEgKGNsaWNrKT1cXFwiZ29iYWNrKClcXFwiIGhyZWY9XFxcIiNcXFwiPmhlcmU8L2E+LlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyBcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dGhTZXJ2aWNlLl9sb2dnZWRJbikgeyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsndW5hdXRob3JpemVkJ10pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==