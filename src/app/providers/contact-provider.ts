import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class ContactProvider {

    resource: string = '/contact';

    constructor(private http: HttpService) { 
        
    }

}