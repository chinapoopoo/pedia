import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global.variable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  selectedTab: string = 'main';

  constructor(private gVar: GlobalVariableService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.router.url == '/admin') {
      this.selectedTab = 'main';
    }
    else if(this.router.url == '/admin/list') {
      this.selectedTab = 'list';
    }
    else if(this.router.url == '/admin/login') {
      this.selectedTab = 'login';
    }
    else 
      this.selectedTab = 'write'
  }

  goNav(des: string) {
    this.router.navigate([des]);
  }
}
