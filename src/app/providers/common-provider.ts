import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class CommonProvider {

    resource: string = '';

    constructor(private http: HttpService) { 
        
    }
}