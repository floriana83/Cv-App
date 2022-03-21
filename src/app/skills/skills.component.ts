import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',

})
export class SkillsComponent implements OnInit {
skills: Skills[];
  constructor() { 
    this.skills = [
      {
        icon: "devicons-html5"
      },
      {
        icon: "devicons-css3"
      },
      {
        icon: "devicons-javascript"
      },
      {
        icon: "devicons-sass"
      },
      {
        icon: "devicons-bootstrap"
      },   
      {
        icon: "devicons-firebase"
      },
      {
        icon: "devicons-git"
      },
      {
        icon: "devicons-github"
      },
    
      {
        icon: "devicons-react"
      },
      {
        icon: "devicons-angular"
      },
     
    ]
  }

  ngOnInit(): void {
  }

}
