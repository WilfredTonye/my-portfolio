import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { ProjectListComponent } from './Projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './Projects/project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'about',
    component:AboutComponent,
  },
  {
    path:'resume',
    component:ResumeComponent,
  },
  {
    path:'services',
    component:ServicesComponent,
  },
  {
    path:'projects',
    component:ProjectListComponent,
  },
  {
    path:'projects/:id',
    component:ProjectDetailsComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  }
];
