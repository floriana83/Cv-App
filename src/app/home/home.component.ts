import { Component, OnInit } from '@angular/core';
import { Social } from '../model/social.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
name:string[];
paragraph1:string;
paragraph2:string;
paragraph3:string;
social: Social[];
  constructor() { 
    this.name = ['Floriana','Domianello'];
    this.paragraph1 = `Sono laureata e specializzata in Conservazione e Restauro dei Beni Culturali; questa qualifica insieme ad altre, come quella di addetto segretariale amministrativo, mi hanno dato la possibilità di imparare l'importanza e il valore del lavoro di squadra. 
    Sono una persona incline all'apprendimento con una spiccata passione per il mondo dell'informatica. `
    this.paragraph2 = `Affascinata dalle grandi potenzialità del tech e dei suoi applicativi, ho deciso di rincorrere la mia passione ed esplorare il mondo dello sviluppo web. `
    this.paragraph3 = `Negli ultimi mesi ho avuto la possibilità grazie ad Edgemony di studiare, apprendere e sperimentare diversi linguaggi e librerie (HTML, CSS, Javascript, React, Sass) al fine di trovare un ambiente dove spendere e sviluppare le mie capacità.`
    this.social = [{
      social: "fa-linkedin",
      link: "https://linkedin.com/in/floriana-domianello"
    },
    {
      social: "fa-github",
      link: "https://github.com/floriana83/"
    }
  ]
  }

  ngOnInit(): void {
  }

}
