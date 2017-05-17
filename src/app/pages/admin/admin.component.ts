import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global.variable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private gVar: GlobalVariableService, private router: Router) { }

  ngOnInit() {
  }

  goNav(des = '') {
    this.router.navigate([des]);
  }
}
