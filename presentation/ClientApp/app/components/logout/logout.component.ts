import { Component, Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserManager, Log, MetadataService, User, WebStorageStateStore } from 'oidc-client';

@Component({
    selector: 'logout',
    template: require('./logout.component.html')
})

export class Logout{
}