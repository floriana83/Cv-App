import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

import { InterestsComponent } from './interests/interests.component';
import { ProjectComponent } from './project/project.component';
import {HttpClientModule} from '@angular/common/http';

// decoratore modulo radice

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,

    InterestsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
