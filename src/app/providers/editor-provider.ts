import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class EditorProvider {

    resource: string = '/editor';

    constructor(private http: HttpService) { 
        
    }

    getEditor(id) {
        return this.http.get(this.resource, {id: id})
    }
    addEditor(menuNo, title, content) {
        return this.http.post(this.resource, {menuNo: menuNo, title: title, content: content})
    }
    editEditor(id, title, content) {
        return this.http.put(this.resource, {title: title, content: content}, {id: id})
    }
    deleteEditor(id) {
        return this.http.delete(this.resource, {id: id})
    }
}