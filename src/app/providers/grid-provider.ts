import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class GridProvider {

    resource: string = '';

    constructor(private http: HttpService) { 
        
    }
}