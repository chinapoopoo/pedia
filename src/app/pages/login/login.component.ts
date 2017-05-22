import { Component, OnInit } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = '';
  pwd: string = '';

  constructor(private commonProvider: CommonProvider) { }

  ngOnInit() {
  }
  
  login() {
    this.commonProvider.login(this.id, this.pwd)
    .map(data => data.json())
    .subscribe(
      data => {
        if(data.length == 0)
          alert('로그인 실패');
        else
          alert('환영합니다');
      }
    );
  }
}
