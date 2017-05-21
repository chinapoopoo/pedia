import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class ContactProvider {

    resource: string = '/contact';
    resource2: string = '/contact/detail';

    constructor(private http: HttpService) { 
        
    }

    getContact(id) {
        return this.http.get(this.resource, {id: id})
    }
    addContact(menuNo, title) {
        return this.http.post(this.resource, {menuNo: menuNo, title: title})
    }
    editContact(id, title) {
        return this.http.put(this.resource, {id: id, title: title})
    }
    delete(id) {
        return this.http.delete(this.resource, {id: id})
    }

    addContactDetail(contactNo, title, content, tel, addX, addY) {
        return this.http.post(this.resource2, {contactNo: contactNo, title: title, content: content, tel: tel, addX: addX, addY: addY})
    }
    editContactDetail(id, title, content, tel) {
        return this.http.put(this.resource2, {id: id, title: title, content: content, tel: tel})
    }
    deleteContactDetail(id) {
        return this.http.delete(this.resource2, {id: id})
    }
}