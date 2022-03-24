import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  education: Observable<Education[]>;
  
  constructor(private http: HttpClient) {

    this.education = new  Observable<Education[]>();
    // this.education = [
    //   {
    //     qualifica: 'Front End Developer',
    //     corso: ' Coding Bootcamp',
    //     struttura: 'Edgemony',
    //     descrizione: `Corso intesivo di coding, della durata di 4 mesi, composto da lezioni di live coding ed esercitazioni pratiche giornaliere, volto all'apprendimento dei seguenti linguaggi, framework e librerie: Html, Css, Javascript, React, Next, Sass, Styled Component.`,
    //     periodo: 'OTT 2021 - FEB 2022',

    //   },
    //   {
    //     qualifica: 'Addetto Amministrativo Segretariale Livello EQF:2',
    //     corso: 'Corso Regionale di Addetto Amministrativo Segretariale',
    //     struttura: 'Associazione Centro Studi I.D.I. Via Ausonia, 122 Palermo',
    //     descrizione: '',
    //     periodo: 'MAG 2019 - GEN 2020',

    //   },
    //   {
    //     qualifica: 'Dottore Magistrale in Conservazione e Restauro dei Beni Culturali.',
    //     corso: 'Laurea Specialistica in “Conservazione e Restauro dei Beni Culturali”, indirizzo Restauro dei materiali di origine inorganica, Facoltà di Scienze MM.FF.NN.',
    //     struttura: 'Università degli Studi di Palermo(Italia).',
    //     descrizione: '',
    //     periodo: 'APR 14',

    //   },
    //   {
    //     qualifica: 'Dottore in Conservazione e Restauro dei Beni Culturali.',
    //     corso: 'Laurea Triennale in Conservazione e Restauro dei Beni Culturali, Facoltà di Scienze MM.FF.NN.',
    //     struttura: 'Università degli Studi di Palermo(Italia).',
    //     descrizione: '',
    //     periodo: '28 OTT 02 - 26 FEB 07',

    //   },
    //   {
    //     qualifica: 'Diploma di maturità scientifica',
    //     corso: 'Liceo Scientifico Matematico Naturalistico con indirizzo sperimentale',
    //     struttura: 'Istituto Salesiano Don Bosco Ranchibile',
    //     descrizione: '',
    //     periodo: 'SET 96 - LUG 02',

    //   }
    // ]
  }

  ngOnInit(): void {
    this.education = this.http.get<Education[]>('http://cv-app-node.herokuapp.com/api/education/');
  }

}
