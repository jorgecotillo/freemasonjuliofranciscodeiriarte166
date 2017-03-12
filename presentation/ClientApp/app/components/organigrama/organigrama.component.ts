import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service' 
import { GoogleChartComponent } from '../shared/components/google-chart.component';
import 'rxjs/Rx'; //import needed in order to have .map function available
declare var google:any;

@Component({
    selector: 'organigrama',
    template: require('./organigrama.component.html'),
    styles: [require('./organigrama.component.css')],
    encapsulation: ViewEncapsulation.None //Needed in order to remove _ngContent suffix to all CSS objects
})

export class OrganigramaComponent implements OnInit {
    public _response: string = "";
    public _data: any;
    _user: User;
    _loadedUserSub: any;
    

    constructor (private _authService: AuthService){
    }

    ngOnInit() {
        this._data = this.org_ChartData();
        this._loadedUserSub = 
            this
                ._authService
                ._userLoadedEvent
                .subscribe(user => {
                    this._user = user;
                });
    }

    public getOrganigrama(){
        this
            ._authService
            .AuthGet(process.env.service_endpoint + "/api/v1.0/OrganizationChart")
            .map(response => response.json())
            .subscribe(response => {
                console.log(response);
                this._response = response;
            });
    }

    public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7] ];

    public pie_ChartOptions  = {
        title: 'My Daily Activities',
        width: 900,
        height: 500
    };

    public org_ChartData(){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
           '', 'The President'],
          [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
           'Mike', 'VP'],
          ['Alice', 'Mike', ''],
          ['Bob', 'Jim', 'Bob Sponge'],
          ['Carol', 'Bob', '']
        ]);
        return data;
    }

    public org_ChartOptions = {
        allowHtml: true
    };

    ngOnDestroy(){
        if(this._loadedUserSub.unsubscribe()){
            //this._loadedUserSub.unsubscribe();
        }
    }
}
