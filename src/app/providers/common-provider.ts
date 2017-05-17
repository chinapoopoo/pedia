import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class CommonProvider {

    constructor(private http: HttpService) { 
        
    }

    getMenu() {
        return this.http.get('/menu')
    }
    addMenu(name) {
        return this.http.post('/menu', {name: name})
    }
    editMenu(id, name) {
        return this.http.put('/menu', {id: id, name: name})
    }
    deleteMenu(id) {
        return this.http.delete('/menu', {id: id})
    }

    getSubMenu() {
        return this.http.get('/submenu')
    }
}