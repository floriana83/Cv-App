import { InterestsComponent } from './interests/interests.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {'path':'', component: HomeComponent},
  {'path':'experience', component: ExperienceComponent},
  {'path':'education', component: EducationComponent},
  {'path':'skills', component: SkillsComponent},
  {'path':'interests', component: InterestsComponent},
  {'path':'project', component: ProjectComponent},
  {'path': '**', redirectTo: '',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
