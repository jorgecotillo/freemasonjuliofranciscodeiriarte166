import 'angular2-universal-polyfills';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { Logger } from "angular2-logger/core";
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { CallbackComponent } from './components/callback/callback.component';
import { OrganigramaComponent } from './components/organigrama/organigrama.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthService } from './components/shared/services/auth.service';
import { GlobalEventsManager } from './components/shared/services/global.events.manager';
import { AuthGuardService } from './components/shared/services/auth-guard.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        OrganigramaComponent,
        CallbackComponent,
        UnauthorizedComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        //Angular2FontawesomeModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'callback', component: CallbackComponent },
            { path: 'organigrama', component: OrganigramaComponent, canActivate:[AuthGuardService] },
            { path: 'unauthorized', component: UnauthorizedComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ Logger, AuthService, AuthGuardService, GlobalEventsManager ],
    exports: [
        RouterModule
    ]
})
export class AppModule {
    
}
