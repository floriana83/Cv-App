import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',

})
export class ProjectComponent implements OnInit {
linkprog: Project[];
  constructor() { 
    this.linkprog = [
      { 
      name:"Snorlaxon",
      link: "https://clone-8164f.web.app/",
     
  },
  { 
    name:"Wind-Bnb",
    link: "https://floriana83.github.io/wind-bnb",
  
},
]
  }

  ngOnInit(): void {
  }

}
