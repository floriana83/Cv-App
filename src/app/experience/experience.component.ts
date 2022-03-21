import { Component, OnInit } from '@angular/core';
import { Experience } from '../model/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  listaexperience: Experience[];
  constructor() {
    this.listaexperience = [
      {
        mansione: 'Front End Developer',
        azienda: 'Edgemony ',
        descrizione: `Progetto finale del Coding Bootcamp di Edgemony.
        Amazon Clone | il progetto è stato sviluppato con Metodologia Agile, in ambiente React con l'ausilio delle seguenti utility: 
        Sass e Material UI (stili e icone);
        React router (per la dinamicità delle pagine);
        Firebase (backend: Hosting, json api, login)`,
        periodo: 'FEB 2022',
        stato: '',
      },
      {
        mansione: 'Front End Developer',
        azienda: 'Progetto personale',
        descrizione: `AirBnb Clone | il progetto è stato sviluppato con Metodologia Agile, in ambiente React con l'ausilio delle seguenti utility: 
        Sass e Material UI (stili e icone)`,
        periodo: 'GEN 2022',
        stato: '',
      },
      {
        mansione: 'Addetta Segretaria Amministrativa ',
        azienda: 'lavoratore autonomo',
        descrizione: '',
        periodo: '2019 - 2020',
        stato: '',
      },
      {
        mansione: 'Trader indipendente e coach di trading',
        azienda: 'lavoratore autonomo',
        descrizione: '',
        periodo: 'MAG 2018 - GEN 2019',
        stato: '',
      },
      {
        mansione: 'Tecnico restauratore',
        azienda: 'lavoratore autonomo',
        descrizione: '',
        periodo: '2004 - 2018',
        stato: '',
      }
    ];
  }

  ngOnInit(): void {
  }

}
