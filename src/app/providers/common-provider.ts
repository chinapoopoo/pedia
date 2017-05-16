import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class CommonProvider {

    constructor(private http: HttpService) { 
        
    }

    getMenu() {
        return this.http.get('/menu')
    }

    getSubMenu() {
        return this.http.get('/submenu')
    }
}