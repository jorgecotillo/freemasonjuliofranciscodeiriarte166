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
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("zone.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("@angular/core");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	var unauthorized_component_1 = __webpack_require__(35);
	var auth_service_1 = __webpack_require__(14);
	var global_events_manager_1 = __webpack_require__(17);
	var auth_guard_service_1 = __webpack_require__(38);
	var google_chart_component_1 = __webpack_require__(39);
	var admin_component_1 = __webpack_require__(40);
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
	            google_chart_component_1.GoogleChartComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            home_component_1.HomeComponent,
	            organigrama_component_1.OrganigramaComponent,
	            admin_component_1.AdminComponent,
	            callback_component_1.CallbackComponent,
	            unauthorized_component_1.UnauthorizedComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'callback', component: callback_component_1.CallbackComponent },
	                { path: 'organigrama', component: organigrama_component_1.OrganigramaComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
	                { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("@angular/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("angular2-logger/core");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
	                    console.log('got a user');
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
	                console.log(user);
	                _this._globalEventsManager.showNavBar(true);
	                _this._loggedIn = true;
	                _this._router.navigate(['home']);
	                //This line is needed in order to set the global user object
	                _this._currentUser = user;
	                console.log("current user", _this._currentUser);
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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("@angular/http");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("oidc-client");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/BehaviorSubject");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "\n<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Julio Francisco de Iriarte 166</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='fa fa-home'></span> Quienes Somos?\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/organigrama']\">\n                        <span class='fa fa-sitemap'></span> Organigrama\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/admin']\">\n                        <span class='fa fa-lock'></span> Admin\n                    </a>\n                </li>\n                <li *ngIf=\"!_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"login()\" [routerLink]=\"['/login']\">\n                        <span class=\"fa fa-user-o\"></span> Login\n                    </a>\n                </li>\n                <li *ngIf=\"_loggedIn\" [routerLinkActive]=\"['link-active']\">\n                    <a (click)=\"logout()\" [routerLink]=\"['/logout']\">\n                        <span class='fa fa-sign-out'></span> Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(21);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n.fa-2 {\n    font-size: 2em;\n}\n\n.fa-3 {\n    font-size: 4em;\n}\n\n.fa-4 {\n    font-size: 7em;\n}\n\n.fa-5 {\n    font-size: 12em;\n}\n\n.fa-6 {\n    font-size: 20em;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<h1>Hello, world! - Jorge</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<div></div>"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
	        this.pie_ChartData = [
	            ['Task', 'Hours per Day'],
	            ['Work', 11],
	            ['Eat', 2],
	            ['Commute', 2],
	            ['Watch TV', 2],
	            ['Sleep', 7]
	        ];
	        this.pie_ChartOptions = {
	            title: 'My Daily Activities',
	            width: 900,
	            height: 500
	        };
	        this.org_ChartOptions = {
	            allowHtml: true,
	            size: "large",
	            nodeClass: "node",
	            selectedNodeClass: "node-selected"
	        };
	    }
	    OrganigramaComponent.prototype.ngOnInit = function () {
	        this._data = this.org_ChartData();
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
	    OrganigramaComponent.prototype.org_ChartData = function () {
	        var data = new google.visualization.DataTable();
	        data.addColumn('string', 'Name');
	        data.addColumn('string', 'Manager');
	        data.addColumn('string', 'ToolTip');
	        // For each orgchart box, provide the name, manager, and tooltip to show.
	        data.addRows([
	            [{ v: 'VM', f: 'Victor Manuel Vera Betancourt<div style="color:black; font-style:italic">V:.M:.</div>' },
	                '', 'Venerable Maestro'],
	            [{ v: 'PVMI', f: 'Walter Perone Carrillo<div style="color:black; font-style:italic">P:.V:.M:.I:.</div>' },
	                'VM', 'Past Venerable Maestro Inmediato']
	            //['Alice', 'Mike', ''],
	        ]);
	        return data;
	    };
	    OrganigramaComponent.prototype.ngOnDestroy = function () {
	        if (this._loadedUserSub.unsubscribe()) {
	            //this._loadedUserSub.unsubscribe();
	        }
	    };
	    return OrganigramaComponent;
	}());
	OrganigramaComponent = __decorate([
	    core_1.Component({
	        selector: 'organigrama',
	        template: __webpack_require__(32),
	        styles: [__webpack_require__(33)],
	        encapsulation: core_1.ViewEncapsulation.None //Needed in order to remove _ngContent suffix to all CSS objects
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService])
	], OrganigramaComponent);
	exports.OrganigramaComponent = OrganigramaComponent;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "<h1>Cuadro Logial 2017</h1>\n<div id=\"org_chart\" [chartData]=\"_data\" [chartOptions] = \"org_ChartOptions\" chartType=\"OrgChart\" GoogleChart></div>"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(34);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "div#pie_chart table {\n\tborder-collapse: initial;\n}\n\n.node {\n\tbackground-color: #4189C7;\n\tborder-radius: 4px;\n\tcolor: white;\n\tborder: 2px solid #0C1C84;\n\tbox-shadow: 7px 7px 5px grey;\n}\n\n.node-selected {\n\tborder: 2px solid #e3ca4b;\n    background-color: #fff7ae;\n    background: -webkit-gradient(linear, left top, left bottom, from(#fff7ae), to(#eee79e));\n\tcolor: #4189C7;\n}", ""]);
	
	// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

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
	var common_1 = __webpack_require__(36);
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
	        template: __webpack_require__(37),
	        selector: 'unauthorized'
	    }),
	    __metadata("design:paramtypes", [common_1.Location, auth_service_1.AuthService])
	], UnauthorizedComponent);
	exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = require("@angular/common");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div>\n  Unauthorized Request to login click <a (click)=\"login()\" href=\"#\">here</a>.\n</div>\n<br>\n<div>\n  To go back click <a (click)=\"goback()\" href=\"#\">here</a>.\n</div>"

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

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
	var GoogleChartComponent = (function () {
	    function GoogleChartComponent(element) {
	        this.element = element;
	        this._element = this.element.nativeElement;
	    }
	    GoogleChartComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () {
	            google.charts.load('current', { 'packages': ['corechart'] });
	            setTimeout(function () {
	                _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element);
	            }, 500);
	        }, 500);
	    };
	    GoogleChartComponent.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
	        google.charts.setOnLoadCallback(drawChart);
	        function drawChart() {
	            var wrapper;
	            wrapper = new google.visualization.ChartWrapper({
	                chartType: chartType,
	                dataTable: chartData,
	                options: chartOptions || {},
	                containerId: ele.id
	            });
	            wrapper.draw();
	        }
	    };
	    return GoogleChartComponent;
	}());
	__decorate([
	    core_1.Input('chartType'),
	    __metadata("design:type", String)
	], GoogleChartComponent.prototype, "chartType", void 0);
	__decorate([
	    core_1.Input('chartOptions'),
	    __metadata("design:type", Object)
	], GoogleChartComponent.prototype, "chartOptions", void 0);
	__decorate([
	    core_1.Input('chartData'),
	    __metadata("design:type", Object)
	], GoogleChartComponent.prototype, "chartData", void 0);
	GoogleChartComponent = __decorate([
	    core_1.Directive({
	        selector: '[GoogleChart]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], GoogleChartComponent);
	exports.GoogleChartComponent = GoogleChartComponent;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

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
	var AdminComponent = (function () {
	    function AdminComponent(_authService) {
	        this._authService = _authService;
	        this._response = "";
	    }
	    AdminComponent.prototype.ngOnInit = function () {
	    };
	    AdminComponent.prototype.sendNotification = function () {
	        var _this = this;
	        this
	            ._authService
	            .AuthPost(process.env.service_endpoint + "/api/v1.0/SendNotification", { messageToBroadcast: "Hello" })
	            .map(function (response) { return response.json(); })
	            .subscribe(function (response) {
	            console.log(response);
	            _this._response = response;
	        });
	    };
	    return AdminComponent;
	}());
	AdminComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(41),
	        selector: 'admin'
	    }),
	    __metadata("design:paramtypes", [auth_service_1.AuthService])
	], AdminComponent);
	exports.AdminComponent = AdminComponent;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "<button (click)=\"sendNotification()\">Increment</button>"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODA1ZDk3MGE2NDVkZjI1MjJkYTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3M/MWJmYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2dvb2dsZS1jaGFydC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltd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QUFlO01BQzFCLENBQUM7c0NBTTRCLGlCQUFVO0lBTDNCLG9CQUFvQixDQTZCaEM7QUE3QlkscURBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOakMscUNBQWdEO0FBQ2hELDhDQUE2RDtBQUU3RCx5QkFBaUIsQ0FBQyx3REFBd0Q7QUFPMUUsS0FBYSxjQUFjO0tBS3ZCLHdCQUFxQixZQUF5QjtTQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtTQUY5QyxjQUFTLEdBQVcsRUFBRSxDQUFDO0tBR3ZCLENBQUM7S0FFRCxpQ0FBUSxHQUFSO0tBQ0EsQ0FBQztLQUVNLHlDQUFnQixHQUF2QjtTQUFBLGlCQVVDO1NBVEcsSUFBSTtjQUNDLFlBQVk7Y0FDWixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyw0QkFBNEIsRUFDckUsRUFBRSxrQkFBa0IsRUFBRyxPQUFPLEVBQUUsQ0FBQztjQUNoQyxHQUFHLENBQUMsa0JBQVEsSUFBSSxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2NBQ2hDLFNBQVMsQ0FBQyxrQkFBUTthQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDOUIsQ0FBQyxDQUFDLENBQUM7S0FDWCxDQUFDO0tBQ0wscUJBQUM7QUFBRCxFQUFDO0FBdEJZLGVBQWM7S0FMMUIsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRyxtQkFBTyxDQUFDLEVBQXdCLENBQUM7U0FDNUMsUUFBUSxFQUFHLE9BQU87TUFDckIsQ0FBQztzQ0FPcUMsMEJBQVc7SUFMckMsY0FBYyxDQXNCMUI7QUF0QlkseUNBQWM7Ozs7Ozs7QUNWM0IsNkUiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MDVkOTcwYTY0NWRmMjUyMmRhNiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JnYW5pZ3JhbWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50JztcbmltcG9ydCB7IFVuYXV0aG9yaXplZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2dsb2JhbC5ldmVudHMubWFuYWdlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2NvbXBvbmVudHMvZ29vZ2xlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEdvb2dsZUNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE9yZ2FuaWdyYW1hQ29tcG9uZW50LFxuICAgICAgICBBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgQ2FsbGJhY2tDb21wb25lbnQsXG4gICAgICAgIFVuYXV0aG9yaXplZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGxiYWNrJywgY29tcG9uZW50OiBDYWxsYmFja0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnb3JnYW5pZ3JhbWEnLCBjb21wb25lbnQ6IE9yZ2FuaWdyYW1hQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2FkbWluJywgY29tcG9uZW50OiBBZG1pbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6W0F1dGhHdWFyZFNlcnZpY2VdIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd1bmF1dGhvcml6ZWQnLCBjb21wb25lbnQ6IFVuYXV0aG9yaXplZENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIExvZ2dlciwgQXV0aFNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2UsIEdsb2JhbEV2ZW50c01hbmFnZXIgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWxvZ2dlci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbiAgXG4gIHB1YmxpYyBfbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuICAgICAgcHJpdmF0ZSBfZ2xvYmFsRXZlbnRzTWFuYWdlcjogR2xvYmFsRXZlbnRzTWFuYWdlcikge1xuICAgICAgICAgIF9nbG9iYWxFdmVudHNNYW5hZ2VyLnNob3dOYXZCYXJFbWl0dGVyLnN1YnNjcmliZSgobW9kZSk9PntcbiAgICAgICAgICAgIC8vIG1vZGUgd2lsbCBiZSBudWxsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGNyZWF0ZWQsIHNvIHlvdSBuZWVkIHRvIGlnb25vcmUgaXQgd2hlbiBudWxsXG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IG1vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCl7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbm91dE1haW5XaW5kb3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBHbG9iYWxFdmVudHNNYW5hZ2VyIH0gZnJvbSAnLi9nbG9iYWwuZXZlbnRzLm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBfbWdyOiBVc2VyTWFuYWdlcjtcbiAgX3VzZXJMb2FkZWRFdmVudDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xuICBfY3VycmVudFVzZXI6IFVzZXI7XG4gIF9sb2dnZWRJbjogYm9vbGVhbjtcblxuICBfYXV0aEhlYWRlcnM6IEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOkh0dHAsIFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcbiAgICBwcml2YXRlIF9nbG9iYWxFdmVudHNNYW5hZ2VyOiBHbG9iYWxFdmVudHNNYW5hZ2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgLy9pbnN0YW5jZSBuZWVkcyB0byBiZSBjcmVhdGVkIHdpdGhpbiB0aGUgaWYgY2xhdXNlXG4gICAgICAvL290aGVyd2lzZSB5b3UnbGwgZ2V0IGEgc2Vzc2lvblN0b3JhZ2Ugbm90IGRlZmluZWQgZXJyb3IuXG4gICAgICAgIHRoaXMuX21nciA9IG5ldyBVc2VyTWFuYWdlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX21nclxuICAgICAgICAuZ2V0VXNlcigpXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgYSB1c2VyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWdyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQoKGUpID0+IHtcbiAgICAgICAgICAgIC8vaWYgKCFlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHVubG9hZGVkXCIpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2xlYXJTdGF0ZSgpIHtcbiAgICAgIHRoaXMuX21nci5jbGVhclN0YWxlU3RhdGUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhclN0YXRlU3RhdGUgc3VjY2Vzc1wiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIGVycm9yXCIsIGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7IFxuICAgICAgdGhpcy5fbWdyLmdldFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHVzZXJcIik7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KHVzZXIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVVc2VyKCkge1xuICAgICAgdGhpcy5fbWdyLnJlbW92ZVVzZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZEV2ZW50LmVtaXQobnVsbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciByZW1vdmVkXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydFNpZ25pbk1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3QoeyBkYXRhOiAnc29tZSBkYXRhJyB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduaW5SZWRpcmVjdCBkb25lXCIpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBlbmRTaWduaW5NYWluV2luZG93KCkge1xuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgaW4gYSBwcm9taXNlIGEgZ2xvYmFsIHZhcmlhYmxlIGlzIG5vdCBhY2Nlc3NpYmxlLFxuICAgICAgLy8gICAgICBpbnN0ZWFkIGEgbWV0aG9kIHNjb3BlIHZhcmlhYmxlIGlzIHJlcXVpcmVkIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGhpblxuICAgICAgLy8gICAgICB0aGUgcHJvbWlzZS5cbiAgICAgIC8vQW5zd2VyOiB0aGUgcHJldmlvdXMgY29kZSB3YXMgdXNpbmcgZnVuY3Rpb24gKHVzZXIpIHsgfSBpbnN0ZWFkIG9mIGp1c3QgKHVzZXIpID0+XG4gICAgICAvLyAgICAgICAgYmVjYXVzZSBpcyBhIGZ1bmN0aW9uIHRoYXQgb25seSBoYXMgb25lIHBhcmFtZXRlciAodXNlcikgdGhhdCBleHBsYWluc1xuICAgICAgLy8gICAgICAgIHdoeSB0aGUgb3RoZXIgdmFyaWFibGVzIHdlcmUgdW5kZWZpbmVkLCB0aGUgZml4IHdhcyB0byB1c2UgYW4gYW5vbnltb3VzIGZ1bmN0aW9uXG4gICAgICAvLyAgICAgICAgYSBsYW1iZGEgZXhwcmVzc2lvbi5cbiAgICAgIFxuICAgICAgLy9UT0RPOiBWYWxpZGF0ZSB3aHkgZXZlbiB0aG91Z2ggX21nciBoYXMgYWxyZWFkeSBiZWVuIGluc3RhbnRpYXRlZCwgSSBuZWVkIHRvIGVuY2xvc2VcbiAgICAgIC8vICAgICAgdGhlIGNhbGwgaW4gIT09IHVuZGVmaW5lZCwgcmVtb3ZpbmcgdGhlIGlmIGNsYXVzZSByZXN1bHRzIGluIGEgZmFpbHVyZSBvZiBfbWdyXG4gICAgICAvLyAgICAgIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX21nci5zaWduaW5SZWRpcmVjdENhbGxiYWNrKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICAgIHRoaXMuX2dsb2JhbEV2ZW50c01hbmFnZXIuc2hvd05hdkJhcih0cnVlKTtcbiAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnaG9tZSddKTtcbiAgICAgICAgICAvL1RoaXMgbGluZSBpcyBuZWVkZWQgaW4gb3JkZXIgdG8gc2V0IHRoZSBnbG9iYWwgdXNlciBvYmplY3RcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHVzZXJcIiwgdGhpcy5fY3VycmVudFVzZXIpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gIH1cblxuICBzdGFydFNpZ25vdXRNYWluV2luZG93KCkge1xuICAgICAgdGhpcy5fbWdyLnNpZ25vdXRSZWRpcmVjdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgb3V0XCIsIHJlc3ApO1xuICAgICAgICBzZXRUaW1lb3V0KDUwMDAsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RpbmcgdG8gc2VlIGlmIGZpcmVkLi4uXCIpO1xuXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBlbmRTaWdub3V0TWFpbldpbmRvdygpIHtcbiAgICAgIHRoaXMuX21nci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjaygpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgb3V0XCIsIHJlc3ApO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiBFeGFtcGxlIG9mIGhvdyB5b3UgY2FuIG1ha2UgYXV0aCByZXF1ZXN0IHVzaW5nIGFuZ3VsYXJzIGh0dHAgbWV0aG9kcy5cbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoR2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBpZiBvcHRpb25zIGFyZSBub3Qgc3VwcGxpZWQgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlIGlzIGFwcGxpY2F0aW9uL2pzb25cbiAgICovXG4gIEF1dGhQdXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoRGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBpZiBvcHRpb25zIGFyZSBub3Qgc3VwcGxpZWQgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlIGlzIGFwcGxpY2F0aW9uL2pzb25cbiAgICovXG4gIEF1dGhQb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfc2V0QXV0aEhlYWRlcnModXNlcjogVXNlcikge1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgdXNlci50b2tlbl90eXBlICsgXCIgXCIgKyB1c2VyLmFjY2Vzc190b2tlbik7XG4gICAgICB0aGlzLl9hdXRoSGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKHRoaXMuX2F1dGhIZWFkZXJzLmtleXNbMF0sIHRoaXMuX2F1dGhIZWFkZXJzLnZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9zZXR0aW5nIGRlZmF1bHQgYXV0aGVudGljYXRpb24gaGVhZGVyc1xuICAgICAgICB0aGlzLl9zZXRBdXRoSGVhZGVycyh0aGlzLl9jdXJyZW50VXNlcik7XG4gICAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLl9hdXRoSGVhZGVycywgYm9keTogXCJcIiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG5cbmNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gIGF1dGhvcml0eTogcHJvY2Vzcy5lbnYuYXV0aG9yaXR5LFxuICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LmNsaWVudF9pZCxcbiAgcmVkaXJlY3RfdXJpOiBwcm9jZXNzLmVudi5yZWRpcmVjdF91cmksXG4gIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICByZXNwb25zZV90eXBlOiBwcm9jZXNzLmVudi5yZXNwb25zZV90eXBlLFxuICBzY29wZTogcHJvY2Vzcy5lbnYuc2NvcGUsXG5cbiAgc2lsZW50X3JlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYuc2lsZW50X3JlZGlyZWN0X3VyaSxcbiAgLy9hdXRvbWF0aWNTaWxlbnRSZW5ldzogdHJ1ZSxcbiAgLy9zaWxlbnRSZXF1ZXN0VGltZW91dDoxMDAwMCxcblxuICBmaWx0ZXJQcm90b2NvbENsYWltczogcHJvY2Vzcy5lbnYuZmlsdGVyUHJvdG9jb2xDbGFpbXMsXG4gIGxvYWRVc2VySW5mbzogcHJvY2Vzcy5lbnYubG9hZFVzZXJJbmZvXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2lkYy1jbGllbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxFdmVudHNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgX3Nob3dOYXZCYXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XG4gICAgcHVibGljIHNob3dOYXZCYXJFbWl0dGVyOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fc2hvd05hdkJhci5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNob3dOYXZCYXIoaWZTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3Nob3dOYXZCYXIubmV4dChpZlNob3cpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2dsb2JhbC5ldmVudHMubWFuYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+SnVsaW8gRnJhbmNpc2NvIGRlIElyaWFydGUgMTY2PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1ob21lJz48L3NwYW4+IFF1aWVuZXMgU29tb3M/XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL29yZ2FuaWdyYW1hJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zaXRlbWFwJz48L3NwYW4+IE9yZ2FuaWdyYW1hXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FkbWluJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1sb2NrJz48L3NwYW4+IEFkbWluXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiIV9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtdXNlci1vXFxcIj48L3NwYW4+IExvZ2luXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiX2xvZ2dlZEluXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dvdXQnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXNpZ24tb3V0Jz48L3NwYW4+IExvZ291dFxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmEtMiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtMyB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNCB7XFxuICAgIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtNSB7XFxuICAgIGZvbnQtc2l6ZTogMTJlbTtcXG59XFxuXFxuLmZhLTYge1xcbiAgICBmb250LXNpemU6IDIwZW07XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciwgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvLCB3b3JsZCEgLSBKb3JnZTwvaDE+XFxuPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nZXQuYXNwLm5ldC8nPkFTUC5ORVQgQ29yZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCc+QyM8L2E+IGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vYW5ndWxhci5pby8nPkFuZ3VsYXIgMjwvYT4gYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cXG48L3VsPlxcbjxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XFxuPHVsPlxcbiAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXG48L3VsPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZXRjaGRhdGEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YUNvbXBvbmVudCB7XG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JlY2FzdHMgPSByZXN1bHQuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcblxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxuXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxuXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxuICAgIDx0aGVhZD5cXG4gICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY3VycmVudENvdW50ID0gMTA7XG5cbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q291bnRlcjwvaDI+XFxuXFxuPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGFuIEFuZ3VsYXIgMiBjb21wb25lbnQuPC9wPlxcblxcbjxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+e3sgY3VycmVudENvdW50IH19PC9zdHJvbmc+PC9wPlxcblxcbjxidXR0b24gKGNsaWNrKT1cXFwiaW5jcmVtZW50Q291bnRlcigpXFxcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2FsbGJhY2snLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYWxsYmFja0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgICAgIF9hdXRoU2VydmljZS5lbmRTaWduaW5NYWluV2luZG93KCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyLCBMb2csIE1ldGFkYXRhU2VydmljZSwgVXNlciwgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnIFxuaW1wb3J0IHsgR29vZ2xlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9nb29nbGUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCAncnhqcy9SeCc7IC8vaW1wb3J0IG5lZWRlZCBpbiBvcmRlciB0byBoYXZlIC5tYXAgZnVuY3Rpb24gYXZhaWxhYmxlXG5kZWNsYXJlIHZhciBnb29nbGU6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ29yZ2FuaWdyYW1hJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vcmdhbmlncmFtYS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vb3JnYW5pZ3JhbWEuY29tcG9uZW50LmNzcycpXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lIC8vTmVlZGVkIGluIG9yZGVyIHRvIHJlbW92ZSBfbmdDb250ZW50IHN1ZmZpeCB0byBhbGwgQ1NTIG9iamVjdHNcbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmdhbmlncmFtYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIF9yZXNwb25zZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgX2RhdGE6IGFueTtcbiAgICBfdXNlcjogVXNlcjtcbiAgICBfbG9hZGVkVXNlclN1YjogYW55O1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLm9yZ19DaGFydERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JnYW5pZ3JhbWEoKXtcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLl9hdXRoU2VydmljZVxuICAgICAgICAgICAgLkF1dGhHZXQocHJvY2Vzcy5lbnYuc2VydmljZV9lbmRwb2ludCArIFwiL2FwaS92MS4wL09yZ2FuaXphdGlvbkNoYXJ0XCIpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBpZV9DaGFydERhdGEgPSBbXG4gICAgWydUYXNrJywgJ0hvdXJzIHBlciBEYXknXSxcbiAgICBbJ1dvcmsnLCAgICAgMTFdLFxuICAgIFsnRWF0JywgICAgICAyXSxcbiAgICBbJ0NvbW11dGUnLCAgMl0sXG4gICAgWydXYXRjaCBUVicsIDJdLFxuICAgIFsnU2xlZXAnLCAgICA3XSBdO1xuXG4gICAgcHVibGljIHBpZV9DaGFydE9wdGlvbnMgID0ge1xuICAgICAgICB0aXRsZTogJ015IERhaWx5IEFjdGl2aXRpZXMnLFxuICAgICAgICB3aWR0aDogOTAwLFxuICAgICAgICBoZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBwdWJsaWMgb3JnX0NoYXJ0RGF0YSgpe1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdOYW1lJyk7XG4gICAgICAgIGRhdGEuYWRkQ29sdW1uKCdzdHJpbmcnLCAnTWFuYWdlcicpO1xuICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1Rvb2xUaXAnKTtcblxuICAgICAgICAvLyBGb3IgZWFjaCBvcmdjaGFydCBib3gsIHByb3ZpZGUgdGhlIG5hbWUsIG1hbmFnZXIsIGFuZCB0b29sdGlwIHRvIHNob3cuXG4gICAgICAgIGRhdGEuYWRkUm93cyhbXG4gICAgICAgICAgW3t2OidWTScsIGY6J1ZpY3RvciBNYW51ZWwgVmVyYSBCZXRhbmNvdXJ0PGRpdiBzdHlsZT1cImNvbG9yOmJsYWNrOyBmb250LXN0eWxlOml0YWxpY1wiPlY6Lk06LjwvZGl2Pid9LFxuICAgICAgICAgICAnJywgJ1ZlbmVyYWJsZSBNYWVzdHJvJ10sXG4gICAgICAgICAgW3t2OidQVk1JJywgZjonV2FsdGVyIFBlcm9uZSBDYXJyaWxsbzxkaXYgc3R5bGU9XCJjb2xvcjpibGFjazsgZm9udC1zdHlsZTppdGFsaWNcIj5QOi5WOi5NOi5JOi48L2Rpdj4nfSxcbiAgICAgICAgICAgJ1ZNJywgJ1Bhc3QgVmVuZXJhYmxlIE1hZXN0cm8gSW5tZWRpYXRvJ11cbiAgICAgICAgICAvL1snQWxpY2UnLCAnTWlrZScsICcnXSxcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcmdfQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBhbGxvd0h0bWw6IHRydWUsXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcbiAgICAgICAgbm9kZUNsYXNzOiBcIm5vZGVcIixcbiAgICAgICAgc2VsZWN0ZWROb2RlQ2xhc3M6IFwibm9kZS1zZWxlY3RlZFwiXG4gICAgfTtcblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIGlmKHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKSl7XG4gICAgICAgICAgICAvL3RoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkN1YWRybyBMb2dpYWwgMjAxNzwvaDE+XFxuPGRpdiBpZD1cXFwib3JnX2NoYXJ0XFxcIiBbY2hhcnREYXRhXT1cXFwiX2RhdGFcXFwiIFtjaGFydE9wdGlvbnNdID0gXFxcIm9yZ19DaGFydE9wdGlvbnNcXFwiIGNoYXJ0VHlwZT1cXFwiT3JnQ2hhcnRcXFwiIEdvb2dsZUNoYXJ0PjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9vcmdhbmlncmFtYS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYjcGllX2NoYXJ0IHRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XFxufVxcblxcbi5ub2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzBDMUM4NDtcXG5cXHRib3gtc2hhZG93OiA3cHggN3B4IDVweCBncmV5O1xcbn1cXG5cXG4ubm9kZS1zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2UzY2E0YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdhZTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZmZmN2FlKSwgdG8oI2VlZTc5ZSkpO1xcblxcdGNvbG9yOiAjNDE4OUM3O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sJyksXG4gICAgc2VsZWN0b3I6ICd1bmF1dGhvcml6ZWQnXG59KVxuXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgICB9XG5cbiAgICBnb2JhY2soKSB7XG4gICAgICAgIC8vIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICBVbmF1dGhvcml6ZWQgUmVxdWVzdCB0byBsb2dpbiBjbGljayA8YSAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBocmVmPVxcXCIjXFxcIj5oZXJlPC9hPi5cXG48L2Rpdj5cXG48YnI+XFxuPGRpdj5cXG4gIFRvIGdvIGJhY2sgY2xpY2sgPGEgKGNsaWNrKT1cXFwiZ29iYWNrKClcXFwiIGhyZWY9XFxcIiNcXFwiPmhlcmU8L2E+LlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyBcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dGhTZXJ2aWNlLl9sb2dnZWRJbikgeyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsndW5hdXRob3JpemVkJ10pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLEVsZW1lbnRSZWYsSW5wdXQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBnb29nbGU6YW55O1xuZGVjbGFyZSB2YXIgZ29vZ2xlTG9hZGVkOmFueTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tHb29nbGVDaGFydF0nXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIF9lbGVtZW50OmFueTtcbiAgQElucHV0KCdjaGFydFR5cGUnKSBwdWJsaWMgY2hhcnRUeXBlOnN0cmluZztcbiAgQElucHV0KCdjaGFydE9wdGlvbnMnKSBwdWJsaWMgY2hhcnRPcHRpb25zOiBPYmplY3Q7XG4gIEBJbnB1dCgnY2hhcnREYXRhJykgcHVibGljIGNoYXJ0RGF0YTogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKCdjdXJyZW50JywgeydwYWNrYWdlcyc6Wydjb3JlY2hhcnQnXX0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgodGhpcy5jaGFydE9wdGlvbnMsdGhpcy5jaGFydFR5cGUsdGhpcy5jaGFydERhdGEsdGhpcy5fZWxlbWVudClcbiAgICAgIH0sNTAwKTtcbiAgICB9LDUwMCk7XG4gIH1cbiAgZHJhd0dyYXBoIChjaGFydE9wdGlvbnMsY2hhcnRUeXBlLGNoYXJ0RGF0YSxlbGUpIHtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdDaGFydCk7XG4gICAgZnVuY3Rpb24gZHJhd0NoYXJ0KCkge1xuICAgICAgdmFyIHdyYXBwZXI7XG4gICAgICB3cmFwcGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcih7XG4gICAgICAgIGNoYXJ0VHlwZTogY2hhcnRUeXBlLFxuICAgICAgICBkYXRhVGFibGU6Y2hhcnREYXRhICxcbiAgICAgICAgb3B0aW9uczpjaGFydE9wdGlvbnMgfHwge30sXG4gICAgICAgIGNvbnRhaW5lcklkOiBlbGUuaWRcbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5kcmF3KCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2dvb2dsZS1jaGFydC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZScgXG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuaW1wb3J0ICdyeGpzL1J4JzsgLy9pbXBvcnQgbmVlZGVkIGluIG9yZGVyIHRvIGhhdmUgLm1hcCBmdW5jdGlvbiBhdmFpbGFibGVcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGUgOiByZXF1aXJlKCcuL2FkbWluLmNvbXBvbmVudC5odG1sJyksXG4gICAgc2VsZWN0b3IgOiAnYWRtaW4nXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgX3VzZXI6IFVzZXI7XG4gICAgX2xvYWRlZFVzZXJTdWI6IGFueTtcbiAgICBfcmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbigpe1xuICAgICAgICB0aGlzXG4gICAgICAgICAgICAuX2F1dGhTZXJ2aWNlXG4gICAgICAgICAgICAuQXV0aFBvc3QocHJvY2Vzcy5lbnYuc2VydmljZV9lbmRwb2ludCArIFwiL2FwaS92MS4wL1NlbmROb3RpZmljYXRpb25cIixcbiAgICAgICAgICAgIHsgbWVzc2FnZVRvQnJvYWRjYXN0IDogXCJIZWxsb1wiIH0pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiAoY2xpY2spPVxcXCJzZW5kTm90aWZpY2F0aW9uKClcXFwiPkluY3JlbWVudDwvYnV0dG9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=