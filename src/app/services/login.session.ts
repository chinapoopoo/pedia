import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class LoginSession {
    constructor(private cookie:CookieService) {
    }
    
    setLogin(login: boolean) {
        this.cookie.putObject('pediaSession', {loggedIn: login});
    }

    isLoggedIn():boolean {
        if(this.cookie.getObject('pediaSession'))
            return JSON.parse(JSON.stringify(this.cookie.getObject('pediaSession'))).loggedIn;
        else
            return false;
    }

    clear() {
        this.cookie.remove('pediaSession');
    }
}