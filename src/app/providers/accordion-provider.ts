import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class AccordionProvider {

    resource: string = '/accordion';

    constructor(private http: HttpService) { 
        
    }

    getAccordion(id) {
        return this.http.get(this.resource, {id: id})
    }
    addAccordion(menuNo, title) {
        return this.http.post(this.resource, {menuNo: menuNo, title: title})
    }
    editAccordion(id, title) {
        return this.http.put(this.resource, {id: id, title: title})
    }
    deleteAccordion(id) {
        return this.http.delete(this.resource, {id: id})
    }

    getAccordionDetail(id) {
        return this.http.get(this.resource + '/detail', {id: id})
    }
    addAccordionDetail(accordionNo, title, content) {
        return this.http.post(this.resource + '/detail', {accordionNo: accordionNo, title: title, content: content})
    }
    editAccordionDetail(id, title, content) {
        return this.http.put(this.resource + '/detail', {id: id, title: title, content: content})
    }
    deleteAccordionDetail(id) {
        return this.http.delete(this.resource + '/detail', {id: id})
    }
}