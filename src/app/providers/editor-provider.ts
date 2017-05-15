import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class EditorProvider {

    resource: string = '';

    constructor(private http: HttpService) { 
        
    }
}