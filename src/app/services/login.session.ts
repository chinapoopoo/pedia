import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class LoginSession {
    // 관리자: emp 3, user 4
    // 지구관리: emp 3, user 2
    // 매장주인: emp 1, user 2
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
        this.cookie.removeAll();
    }
}