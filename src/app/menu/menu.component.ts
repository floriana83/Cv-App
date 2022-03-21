import { Component, OnInit } from '@angular/core';
import { Siderbar } from '../model/siderbar.model';

@Component({
  selector: 'app-menu',
   templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {


  siderbar: Siderbar[];

  constructor() {

    this.siderbar = [
      {
        linkmenu: 'Home',
        rotta: "/",
      },
      {
        linkmenu: 'Experience',
        rotta: "/experience",
      },
      {
        linkmenu: 'Education',
        rotta: "/education",
      },
      {
        linkmenu: 'Skills',
        rotta: "/skills",
      },
      {
        linkmenu: 'Interests',
        rotta: "/interests",
      },
      {
        linkmenu: 'Project',
        rotta: "/project",
      },

    ];
  }
  ngOnInit(): void {
  }

}

