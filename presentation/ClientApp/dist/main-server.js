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
	        this.http = http;
	        this._router = _router;
	        this._globalEventsManager = _globalEventsManager;
	        this._userLoadedEvent = new core_1.EventEmitter();
	        this.instantiateUserManager();
	    }
	    AuthService.prototype.instantiateUserManager = function () {
	        var _this = this;
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
	    };
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
	        console.log("about to create a new user manager instance");
	        if (typeof window !== 'undefined' && typeof this._mgr === 'undefined') {
	            console.log("creating a new instance of UserManager"); //
	            this.instantiateUserManager();
	        }
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

	module.exports = "<h1>Logia Julio Francisco de Iriarte 166</h1>\n<p>Bienvenidos!</p>\n"

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
	        //if(this._loadedUserSub.unsubscribe()){
	        //this._loadedUserSub.unsubscribe();
	        //}
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
	            console.log("redirecting a user");
	            this._authService.startSigninMainWindow(); //Comment
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
	    AdminComponent.prototype.sendNotification = function (title, message) {
	        var _this = this;
	        var body = new Notification(title, message);
	        this
	            ._authService
	            .AuthPost(process.env.service_endpoint + "/api/v1.0/manage/notification", body)
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
	var Notification = (function () {
	    function Notification(title, message) {
	        this.title = title;
	        this.message = message;
	    }
	    return Notification;
	}());


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "<h1>Envio de alertas grupales</h1>\n<div class=\"container\" style=\"width:80%\">\n    <div class=\"form-group row\">\n        <label for=\"broadcast\" class=\"col-2 col-form-label\">Titulo del mensaje:</label>\n        <div class=\"col-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\" #title maxlength=\"47\"/>\n            <small class=\"form-text text-muted\"><code>{{title.value.length}}</code> of 47 characters</small>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"broadcast\" class=\"col-2 col-form-label\">Descripcion:</label>\n        <div class=\"col-10\">\n            <textarea class=\"form-control\" formControlName=\"broadcast\" #broadcast maxlength=\"250\"></textarea>\n            <small class=\"form-text text-muted\"><code>{{broadcast.value.length}}</code> of 250 characters</small>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <button (click)=\"sendNotification(title.value, broadcast.value)\" class=\"btn btn-primary\">Enviar</button>\n    </div>\n</div>\n"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI3MzQ2M2Q5NDMxYTYwNGI2ZjEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1sb2dnZXIvY29yZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvaWRjLWNsaWVudFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3M/MWJmYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2dvb2dsZS1jaGFydC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltd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RCxFQUFDO0FBMUJZLGVBQWM7S0FMMUIsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRyxtQkFBTyxDQUFDLEVBQXdCLENBQUM7U0FDNUMsUUFBUSxFQUFHLE9BQU87TUFDckIsQ0FBQztzQ0FPcUMsMEJBQVc7SUFMckMsY0FBYyxDQTBCMUI7QUExQlkseUNBQWM7QUE0QjNCO0tBSUksc0JBQVksS0FBYSxFQUFFLE9BQWU7U0FDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDM0IsQ0FBQztLQUNMLG1CQUFDO0FBQUQsRUFBQzs7Ozs7OztBQzlDRCw4YUFBNmEsb0JBQW9CLHVZQUF1WSx3QkFBd0IsOE8iLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjczNDYzZDk0MzFhNjA0YjZmMSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JnYW5pZ3JhbWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEuY29tcG9uZW50JztcbmltcG9ydCB7IFVuYXV0aG9yaXplZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2dsb2JhbC5ldmVudHMubWFuYWdlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2NvbXBvbmVudHMvZ29vZ2xlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEdvb2dsZUNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE9yZ2FuaWdyYW1hQ29tcG9uZW50LFxuICAgICAgICBBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgQ2FsbGJhY2tDb21wb25lbnQsXG4gICAgICAgIFVuYXV0aG9yaXplZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGxiYWNrJywgY29tcG9uZW50OiBDYWxsYmFja0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnb3JnYW5pZ3JhbWEnLCBjb21wb25lbnQ6IE9yZ2FuaWdyYW1hQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2FkbWluJywgY29tcG9uZW50OiBBZG1pbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6W0F1dGhHdWFyZFNlcnZpY2VdIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd1bmF1dGhvcml6ZWQnLCBjb21wb25lbnQ6IFVuYXV0aG9yaXplZENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIExvZ2dlciwgQXV0aFNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2UsIEdsb2JhbEV2ZW50c01hbmFnZXIgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWxvZ2dlci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItbG9nZ2VyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbEV2ZW50c01hbmFnZXIgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZ2xvYmFsLmV2ZW50cy5tYW5hZ2VyJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbiAgXG4gIHB1YmxpYyBfbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuICAgICAgcHJpdmF0ZSBfZ2xvYmFsRXZlbnRzTWFuYWdlcjogR2xvYmFsRXZlbnRzTWFuYWdlcikge1xuICAgICAgICAgIF9nbG9iYWxFdmVudHNNYW5hZ2VyLnNob3dOYXZCYXJFbWl0dGVyLnN1YnNjcmliZSgobW9kZSk9PntcbiAgICAgICAgICAgIC8vIG1vZGUgd2lsbCBiZSBudWxsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGNyZWF0ZWQsIHNvIHlvdSBuZWVkIHRvIGlnb25vcmUgaXQgd2hlbiBudWxsXG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJbiA9IG1vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCl7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zdGFydFNpZ25pbk1haW5XaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKXtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbm91dE1haW5XaW5kb3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIgfSBmcm9tICdvaWRjLWNsaWVudCc7XG5pbXBvcnQgeyBHbG9iYWxFdmVudHNNYW5hZ2VyIH0gZnJvbSAnLi9nbG9iYWwuZXZlbnRzLm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBfbWdyOiBVc2VyTWFuYWdlcjtcbiAgX3VzZXJMb2FkZWRFdmVudDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xuICBfY3VycmVudFVzZXI6IFVzZXI7XG4gIF9sb2dnZWRJbjogYm9vbGVhbjtcblxuICBfYXV0aEhlYWRlcnM6IEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOkh0dHAsIFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcbiAgICBwcml2YXRlIF9nbG9iYWxFdmVudHNNYW5hZ2VyOiBHbG9iYWxFdmVudHNNYW5hZ2VyKSB7XG4gICAgICB0aGlzLmluc3RhbnRpYXRlVXNlck1hbmFnZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFudGlhdGVVc2VyTWFuYWdlcigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgIC8vaW5zdGFuY2UgbmVlZHMgdG8gYmUgY3JlYXRlZCB3aXRoaW4gdGhlIGlmIGNsYXVzZVxuICAgICAgICAvL290aGVyd2lzZSB5b3UnbGwgZ2V0IGEgc2Vzc2lvblN0b3JhZ2Ugbm90IGRlZmluZWQgZXJyb3IuXG4gICAgICAgICAgdGhpcy5fbWdyID0gbmV3IFVzZXJNYW5hZ2VyKHNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLl9tZ3JcbiAgICAgICAgICAuZ2V0VXNlcigpXG4gICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KHVzZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9tZ3IuZXZlbnRzLmFkZFVzZXJVbmxvYWRlZCgoZSkgPT4ge1xuICAgICAgICAgICAgICAvL2lmICghZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHVubG9hZGVkXCIpO1xuICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxuXG4gIGNsZWFyU3RhdGUoKSB7XG4gICAgICB0aGlzLl9tZ3IuY2xlYXJTdGFsZVN0YXRlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJTdGF0ZVN0YXRlIHN1Y2Nlc3NcIik7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyU3RhdGVTdGF0ZSBlcnJvclwiLCBlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRVc2VyKCkgeyBcbiAgICAgIHRoaXMuX21nci5nZXRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB1c2VyXCIpO1xuICAgICAgICB0aGlzLl91c2VyTG9hZGVkRXZlbnQuZW1pdCh1c2VyKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVXNlcigpIHtcbiAgICAgIHRoaXMuX21nci5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWRFdmVudC5lbWl0KG51bGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcmVtb3ZlZFwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhcnRTaWduaW5NYWluV2luZG93KCkge1xuICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gY3JlYXRlIGEgbmV3IHVzZXIgbWFuYWdlciBpbnN0YW5jZVwiKTtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5fbWdyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIGEgbmV3IGluc3RhbmNlIG9mIFVzZXJNYW5hZ2VyXCIpOyAvL1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRlVXNlck1hbmFnZXIoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbWdyLnNpZ25pblJlZGlyZWN0KHsgZGF0YTogJ3NvbWUgZGF0YScgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmluUmVkaXJlY3QgZG9uZVwiKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZW5kU2lnbmluTWFpbldpbmRvdygpIHtcbiAgICAgIC8vVE9ETzogVmFsaWRhdGUgd2h5IGluIGEgcHJvbWlzZSBhIGdsb2JhbCB2YXJpYWJsZSBpcyBub3QgYWNjZXNzaWJsZSxcbiAgICAgIC8vICAgICAgaW5zdGVhZCBhIG1ldGhvZCBzY29wZSB2YXJpYWJsZSBpcyByZXF1aXJlZCBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoaW5cbiAgICAgIC8vICAgICAgdGhlIHByb21pc2UuXG4gICAgICAvL0Fuc3dlcjogdGhlIHByZXZpb3VzIGNvZGUgd2FzIHVzaW5nIGZ1bmN0aW9uICh1c2VyKSB7IH0gaW5zdGVhZCBvZiBqdXN0ICh1c2VyKSA9PlxuICAgICAgLy8gICAgICAgIGJlY2F1c2UgaXMgYSBmdW5jdGlvbiB0aGF0IG9ubHkgaGFzIG9uZSBwYXJhbWV0ZXIgKHVzZXIpIHRoYXQgZXhwbGFpbnNcbiAgICAgIC8vICAgICAgICB3aHkgdGhlIG90aGVyIHZhcmlhYmxlcyB3ZXJlIHVuZGVmaW5lZCwgdGhlIGZpeCB3YXMgdG8gdXNlIGFuIGFub255bW91cyBmdW5jdGlvblxuICAgICAgLy8gICAgICAgIGEgbGFtYmRhIGV4cHJlc3Npb24uXG4gICAgICBcbiAgICAgIC8vVE9ETzogVmFsaWRhdGUgd2h5IGV2ZW4gdGhvdWdoIF9tZ3IgaGFzIGFscmVhZHkgYmVlbiBpbnN0YW50aWF0ZWQsIEkgbmVlZCB0byBlbmNsb3NlXG4gICAgICAvLyAgICAgIHRoZSBjYWxsIGluICE9PSB1bmRlZmluZWQsIHJlbW92aW5nIHRoZSBpZiBjbGF1c2UgcmVzdWx0cyBpbiBhIGZhaWx1cmUgb2YgX21nclxuICAgICAgLy8gICAgICBpcyB1bmRlZmluZWRcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9tZ3Iuc2lnbmluUmVkaXJlY3RDYWxsYmFjaygpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICB0aGlzLl9nbG9iYWxFdmVudHNNYW5hZ2VyLnNob3dOYXZCYXIodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUnXSk7XG4gICAgICAgICAgLy9UaGlzIGxpbmUgaXMgbmVlZGVkIGluIG9yZGVyIHRvIHNldCB0aGUgZ2xvYmFsIHVzZXIgb2JqZWN0XG4gICAgICAgICAgdGhpcy5fY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCB1c2VyXCIsIHRoaXMuX2N1cnJlbnRVc2VyKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbiAgc3RhcnRTaWdub3V0TWFpbldpbmRvdygpIHtcbiAgICAgIHRoaXMuX21nci5zaWdub3V0UmVkaXJlY3QoKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgICAgc2V0VGltZW91dCg1MDAwLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHRvIHNlZSBpZiBmaXJlZC4uLlwiKTtcblxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZW5kU2lnbm91dE1haW5XaW5kb3coKSB7XG4gICAgICB0aGlzLl9tZ3Iuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2soKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiLCByZXNwKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogRXhhbXBsZSBvZiBob3cgeW91IGNhbiBtYWtlIGF1dGggcmVxdWVzdCB1c2luZyBhbmd1bGFycyBodHRwIG1ldGhvZHMuXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aEdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5fc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zIGlmIG9wdGlvbnMgYXJlIG5vdCBzdXBwbGllZCB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaXMgYXBwbGljYXRpb24vanNvblxuICAgKi9cbiAgQXV0aERlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnMgaWYgb3B0aW9ucyBhcmUgbm90IHN1cHBsaWVkIHRoZSBkZWZhdWx0IGNvbnRlbnQgdHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqL1xuICBBdXRoUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLl9zZXRSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuXG4gIHByaXZhdGUgX3NldEF1dGhIZWFkZXJzKHVzZXI6IFVzZXIpIHtcbiAgICAgIHRoaXMuX2F1dGhIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIHRoaXMuX2F1dGhIZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIHVzZXIudG9rZW5fdHlwZSArIFwiIFwiICsgdXNlci5hY2Nlc3NfdG9rZW4pO1xuICAgICAgdGhpcy5fYXV0aEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICB9XG4gIHByaXZhdGUgX3NldFJlcXVlc3RPcHRpb25zKG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCh0aGlzLl9hdXRoSGVhZGVycy5rZXlzWzBdLCB0aGlzLl9hdXRoSGVhZGVycy52YWx1ZXNbMF0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vc2V0dGluZyBkZWZhdWx0IGF1dGhlbnRpY2F0aW9uIGhlYWRlcnNcbiAgICAgICAgdGhpcy5fc2V0QXV0aEhlYWRlcnModGhpcy5fY3VycmVudFVzZXIpO1xuICAgICAgICBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdGhpcy5fYXV0aEhlYWRlcnMsIGJvZHk6IFwiXCIgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxufVxuXG5jb25zdCBzZXR0aW5nczogYW55ID0ge1xuICBhdXRob3JpdHk6IHByb2Nlc3MuZW52LmF1dGhvcml0eSxcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5jbGllbnRfaWQsXG4gIHJlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYucmVkaXJlY3RfdXJpLFxuICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk6IHByb2Nlc3MuZW52LnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgcmVzcG9uc2VfdHlwZTogcHJvY2Vzcy5lbnYucmVzcG9uc2VfdHlwZSxcbiAgc2NvcGU6IHByb2Nlc3MuZW52LnNjb3BlLFxuXG4gIHNpbGVudF9yZWRpcmVjdF91cmk6IHByb2Nlc3MuZW52LnNpbGVudF9yZWRpcmVjdF91cmksXG4gIC8vYXV0b21hdGljU2lsZW50UmVuZXc6IHRydWUsXG4gIC8vc2lsZW50UmVxdWVzdFRpbWVvdXQ6MTAwMDAsXG5cbiAgZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb2Nlc3MuZW52LmZpbHRlclByb3RvY29sQ2xhaW1zLFxuICBsb2FkVXNlckluZm86IHByb2Nlc3MuZW52LmxvYWRVc2VySW5mb1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9pZGMtY2xpZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2lkYy1jbGllbnRcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsRXZlbnRzTWFuYWdlciB7XG5cbiAgICBwcml2YXRlIF9zaG93TmF2QmFyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIHB1YmxpYyBzaG93TmF2QmFyRW1pdHRlcjogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX3Nob3dOYXZCYXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93TmF2QmFyKGlmU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zaG93TmF2QmFyLm5leHQoaWZTaG93KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9nbG9iYWwuZXZlbnRzLm1hbmFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkp1bGlvIEZyYW5jaXNjbyBkZSBJcmlhcnRlIDE2NjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtaG9tZSc+PC9zcGFuPiBRdWllbmVzIFNvbW9zP1xcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9vcmdhbmlncmFtYSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc2l0ZW1hcCc+PC9zcGFuPiBPcmdhbmlncmFtYVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hZG1pbiddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbG9jayc+PC9zcGFuPiBBZG1pblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIiFfbG9nZ2VkSW5cXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ2luKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXVzZXItb1xcXCI+PC9zcGFuPiBMb2dpblxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIl9sb2dnZWRJblxcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9nb3V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zaWduLW91dCc+PC9zcGFuPiBMb2dvdXRcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhLTIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhLTMge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTQge1xcbiAgICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTUge1xcbiAgICBmb250LXNpemU6IDEyZW07XFxufVxcblxcbi5mYS02IHtcXG4gICAgZm9udC1zaXplOiAyMGVtO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5Mb2dpYSBKdWxpbyBGcmFuY2lzY28gZGUgSXJpYXJ0ZSAxNjY8L2gxPlxcbjxwPkJpZW52ZW5pZG9zITwvcD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXG5cXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcblxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcblxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDEwO1xuXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcblxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXG5cXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXG5cXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhbGxiYWNrJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYWxsYmFjay5jb21wb25lbnQuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FsbGJhY2tDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe1xuICAgICAgICBfYXV0aFNlcnZpY2UuZW5kU2lnbmluTWFpbldpbmRvdygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciwgTG9nLCBNZXRhZGF0YVNlcnZpY2UsIFVzZXIsIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnb2lkYy1jbGllbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyBcbmltcG9ydCB7IEdvb2dsZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvZ29vZ2xlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgJ3J4anMvUngnOyAvL2ltcG9ydCBuZWVkZWQgaW4gb3JkZXIgdG8gaGF2ZSAubWFwIGZ1bmN0aW9uIGF2YWlsYWJsZVxuZGVjbGFyZSB2YXIgZ29vZ2xlOmFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmdhbmlncmFtYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vb3JnYW5pZ3JhbWEuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3MnKV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSAvL05lZWRlZCBpbiBvcmRlciB0byByZW1vdmUgX25nQ29udGVudCBzdWZmaXggdG8gYWxsIENTUyBvYmplY3RzXG59KVxuXG5leHBvcnQgY2xhc3MgT3JnYW5pZ3JhbWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBfcmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIF9kYXRhOiBhbnk7XG4gICAgX3VzZXI6IFVzZXI7XG4gICAgX2xvYWRlZFVzZXJTdWI6IGFueTtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5vcmdfQ2hhcnREYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE9yZ2FuaWdyYW1hKCl7XG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC5fYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5BdXRoR2V0KHByb2Nlc3MuZW52LnNlcnZpY2VfZW5kcG9pbnQgKyBcIi9hcGkvdjEuMC9Pcmdhbml6YXRpb25DaGFydFwiKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwaWVfQ2hhcnREYXRhID0gW1xuICAgIFsnVGFzaycsICdIb3VycyBwZXIgRGF5J10sXG4gICAgWydXb3JrJywgICAgIDExXSxcbiAgICBbJ0VhdCcsICAgICAgMl0sXG4gICAgWydDb21tdXRlJywgIDJdLFxuICAgIFsnV2F0Y2ggVFYnLCAyXSxcbiAgICBbJ1NsZWVwJywgICAgN10gXTtcblxuICAgIHB1YmxpYyBwaWVfQ2hhcnRPcHRpb25zICA9IHtcbiAgICAgICAgdGl0bGU6ICdNeSBEYWlseSBBY3Rpdml0aWVzJyxcbiAgICAgICAgd2lkdGg6IDkwMCxcbiAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgcHVibGljIG9yZ19DaGFydERhdGEoKXtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgICAgIGRhdGEuYWRkQ29sdW1uKCdzdHJpbmcnLCAnTmFtZScpO1xuICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ01hbmFnZXInKTtcbiAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUb29sVGlwJyk7XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggb3JnY2hhcnQgYm94LCBwcm92aWRlIHRoZSBuYW1lLCBtYW5hZ2VyLCBhbmQgdG9vbHRpcCB0byBzaG93LlxuICAgICAgICBkYXRhLmFkZFJvd3MoW1xuICAgICAgICAgIFt7djonVk0nLCBmOidWaWN0b3IgTWFudWVsIFZlcmEgQmV0YW5jb3VydDxkaXYgc3R5bGU9XCJjb2xvcjpibGFjazsgZm9udC1zdHlsZTppdGFsaWNcIj5WOi5NOi48L2Rpdj4nfSxcbiAgICAgICAgICAgJycsICdWZW5lcmFibGUgTWFlc3RybyddLFxuICAgICAgICAgIFt7djonUFZNSScsIGY6J1dhbHRlciBQZXJvbmUgQ2FycmlsbG88ZGl2IHN0eWxlPVwiY29sb3I6YmxhY2s7IGZvbnQtc3R5bGU6aXRhbGljXCI+UDouVjouTTouSTouPC9kaXY+J30sXG4gICAgICAgICAgICdWTScsICdQYXN0IFZlbmVyYWJsZSBNYWVzdHJvIElubWVkaWF0byddXG4gICAgICAgICAgLy9bJ0FsaWNlJywgJ01pa2UnLCAnJ10sXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3JnX0NoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgYWxsb3dIdG1sOiB0cnVlLFxuICAgICAgICBzaXplOiBcImxhcmdlXCIsXG4gICAgICAgIG5vZGVDbGFzczogXCJub2RlXCIsXG4gICAgICAgIHNlbGVjdGVkTm9kZUNsYXNzOiBcIm5vZGUtc2VsZWN0ZWRcIlxuICAgIH07XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICAvL2lmKHRoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKSl7XG4gICAgICAgICAgICAvL3RoaXMuX2xvYWRlZFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgLy99XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+Q3VhZHJvIExvZ2lhbCAyMDE3PC9oMT5cXG48ZGl2IGlkPVxcXCJvcmdfY2hhcnRcXFwiIFtjaGFydERhdGFdPVxcXCJfZGF0YVxcXCIgW2NoYXJ0T3B0aW9uc10gPSBcXFwib3JnX0NoYXJ0T3B0aW9uc1xcXCIgY2hhcnRUeXBlPVxcXCJPcmdDaGFydFxcXCIgR29vZ2xlQ2hhcnQ+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vcmdhbmlncmFtYS9vcmdhbmlncmFtYS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdiNwaWVfY2hhcnQgdGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcXG59XFxuXFxuLm5vZGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjMEMxQzg0O1xcblxcdGJveC1zaGFkb3c6IDdweCA3cHggNXB4IGdyZXk7XFxufVxcblxcbi5ub2RlLXNlbGVjdGVkIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZTNjYTRiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2FlO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmY3YWUpLCB0bygjZWVlNzllKSk7XFxuXFx0Y29sb3I6ICM0MTg5Qzc7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29yZ2FuaWdyYW1hL29yZ2FuaWdyYW1hLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91bmF1dGhvcml6ZWQuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzZWxlY3RvcjogJ3VuYXV0aG9yaXplZCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbmluTWFpbldpbmRvdygpO1xuICAgIH1cblxuICAgIGdvYmFjaygpIHtcbiAgICAgICAgLy8gdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gIFVuYXV0aG9yaXplZCBSZXF1ZXN0IHRvIGxvZ2luIGNsaWNrIDxhIChjbGljayk9XFxcImxvZ2luKClcXFwiIGhyZWY9XFxcIiNcXFwiPmhlcmU8L2E+LlxcbjwvZGl2Plxcbjxicj5cXG48ZGl2PlxcbiAgVG8gZ28gYmFjayBjbGljayA8YSAoY2xpY2spPVxcXCJnb2JhY2soKVxcXCIgaHJlZj1cXFwiI1xcXCI+aGVyZTwvYT4uXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IFxuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fYXV0aFNlcnZpY2UuX2xvZ2dlZEluKSB7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0aW5nIGEgdXNlclwiKTtcbiAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnN0YXJ0U2lnbmluTWFpbldpbmRvdygpOyAvL0NvbW1lbnRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSxFbGVtZW50UmVmLElucHV0LE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgZ29vZ2xlOmFueTtcbmRlY2xhcmUgdmFyIGdvb2dsZUxvYWRlZDphbnk7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbR29vZ2xlQ2hhcnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBfZWxlbWVudDphbnk7XG4gIEBJbnB1dCgnY2hhcnRUeXBlJykgcHVibGljIGNoYXJ0VHlwZTpzdHJpbmc7XG4gIEBJbnB1dCgnY2hhcnRPcHRpb25zJykgcHVibGljIGNoYXJ0T3B0aW9uczogT2JqZWN0O1xuICBASW5wdXQoJ2NoYXJ0RGF0YScpIHB1YmxpYyBjaGFydERhdGE6IE9iamVjdDtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgIGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHsncGFja2FnZXMnOlsnY29yZWNoYXJ0J119KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKHRoaXMuY2hhcnRPcHRpb25zLHRoaXMuY2hhcnRUeXBlLHRoaXMuY2hhcnREYXRhLHRoaXMuX2VsZW1lbnQpXG4gICAgICB9LDUwMCk7XG4gICAgfSw1MDApO1xuICB9XG4gIGRyYXdHcmFwaCAoY2hhcnRPcHRpb25zLGNoYXJ0VHlwZSxjaGFydERhdGEsZWxlKSB7XG4gICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3Q2hhcnQpO1xuICAgIGZ1bmN0aW9uIGRyYXdDaGFydCgpIHtcbiAgICAgIHZhciB3cmFwcGVyO1xuICAgICAgd3JhcHBlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIoe1xuICAgICAgICBjaGFydFR5cGU6IGNoYXJ0VHlwZSxcbiAgICAgICAgZGF0YVRhYmxlOmNoYXJ0RGF0YSAsXG4gICAgICAgIG9wdGlvbnM6Y2hhcnRPcHRpb25zIHx8IHt9LFxuICAgICAgICBjb250YWluZXJJZDogZWxlLmlkXG4gICAgICB9KTtcbiAgICAgIHdyYXBwZXIuZHJhdygpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9nb29nbGUtY2hhcnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnIFxuaW1wb3J0IHsgVXNlck1hbmFnZXIsIExvZywgTWV0YWRhdGFTZXJ2aWNlLCBVc2VyLCBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJ29pZGMtY2xpZW50JztcbmltcG9ydCAncnhqcy9SeCc7IC8vaW1wb3J0IG5lZWRlZCBpbiBvcmRlciB0byBoYXZlIC5tYXAgZnVuY3Rpb24gYXZhaWxhYmxlXG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlIDogcmVxdWlyZSgnLi9hZG1pbi5jb21wb25lbnQuaHRtbCcpLFxuICAgIHNlbGVjdG9yIDogJ2FkbWluJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIF91c2VyOiBVc2VyO1xuICAgIF9sb2FkZWRVc2VyU3ViOiBhbnk7XG4gICAgX3Jlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24odGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKXtcblxuICAgICAgICB2YXIgYm9keSA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIG1lc3NhZ2UpO1xuICAgICAgICBcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLl9hdXRoU2VydmljZVxuICAgICAgICAgICAgLkF1dGhQb3N0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LnNlcnZpY2VfZW5kcG9pbnQgKyBcIi9hcGkvdjEuMC9tYW5hZ2Uvbm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgYm9keSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIE5vdGlmaWNhdGlvbntcbiAgICB0aXRsZSA6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkVudmlvIGRlIGFsZXJ0YXMgZ3J1cGFsZXM8L2gxPlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgc3R5bGU9XFxcIndpZHRoOjgwJVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJyb2FkY2FzdFxcXCIgY2xhc3M9XFxcImNvbC0yIGNvbC1mb3JtLWxhYmVsXFxcIj5UaXR1bG8gZGVsIG1lbnNhamU6PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwidGl0bGVcXFwiICN0aXRsZSBtYXhsZW5ndGg9XFxcIjQ3XFxcIi8+XFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1tdXRlZFxcXCI+PGNvZGU+e3t0aXRsZS52YWx1ZS5sZW5ndGh9fTwvY29kZT4gb2YgNDcgY2hhcmFjdGVyczwvc21hbGw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJyb2FkY2FzdFxcXCIgY2xhc3M9XFxcImNvbC0yIGNvbC1mb3JtLWxhYmVsXFxcIj5EZXNjcmlwY2lvbjo8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEwXFxcIj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJicm9hZGNhc3RcXFwiICNicm9hZGNhc3QgbWF4bGVuZ3RoPVxcXCIyNTBcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1tdXRlZFxcXCI+PGNvZGU+e3ticm9hZGNhc3QudmFsdWUubGVuZ3RofX08L2NvZGU+IG9mIDI1MCBjaGFyYWN0ZXJzPC9zbWFsbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJzZW5kTm90aWZpY2F0aW9uKHRpdGxlLnZhbHVlLCBicm9hZGNhc3QudmFsdWUpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5FbnZpYXI8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==