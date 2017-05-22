import { Component, OnInit } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';
import { LoginSession } from '../../services/login.session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = '';
  pwd: string = '';

  constructor(private commonProvider: CommonProvider, private loginSession: LoginSession, private router: Router) { }

  ngOnInit() {
    if(this.loginSession.isLoggedIn())
      this.router.navigate(['/admin']);
  }
  
  login() {
    this.commonProvider.login(this.id, this.pwd)
    .map(data => data.json())
    .subscribe(
      data => {
        if(data.length == 0) {
          alert('로그인 실패');
          this.loginSession.setLogin(false);
        }
        else {
          alert('환영합니다');
          this.loginSession.setLogin(true);
          this.router.navigate(['/admin']);
        }
      }
    );
  }
}
