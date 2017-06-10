import { Component, OnInit } from '@angular/core'
import { AuthService } from '../shared/services/auth.service' 
import { IMyDpOptions } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'notificaciones',
    template: require('./notificaciones.component.html'),
})

export class Notificaciones implements OnInit {
    notification_form: FormGroup;

    private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    ngOnInit() {
        this.notification_form = this.formBuilder.group({
            // Empty string or null means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.

            myDate: ['', Validators.required]
            // other controls are here...
        });
    }

    onSubmit() {
        var myDate = this.notification_form.value.myDate;
        this
            .callApi(new Date(myDate.date.year, myDate.date.month, myDate.date.day));
    }

    public _notifications: Notification[];

    constructor (
        private _authService: AuthService,
        private formBuilder: FormBuilder){
            this.callApi(new Date(Date.now()));
    }

    /**
     * Private method that will be moved to a service that will be injected, verify how to pass a default date
     * @param fromDate 
     */
    private callApi(fromDate?: Date){

        if(!fromDate){
            //If a date comes, let's parse it to a UTC string value
            //if no value comes, we'll keep the string value so that the below
            //call can retrieve all the notifications since the beginning of the time
            fromDate = 
                new Date(Date.now());
        }

        var date = this.formatDate(fromDate);

        this
            ._authService
            .AuthGet(
                process.env.service_endpoint + "/api/v1.0/manage/notification/date/" + date.toString())
            .map(response => response.json())
            .subscribe(response => {
                console.log('response', response);
                this._notifications = response;
            });

    }

    private formatDate(date: Date) {
        var d = new Date(date),
            month = '' + d.getMonth(),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
}

interface Notification{
    Title : string;
    Message : string;
}

interface FormDate{
    date : Date;
    epoc : number;
    formatted : string;
}