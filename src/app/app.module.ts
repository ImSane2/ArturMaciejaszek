import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomeComponent } from './sections/home/home.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { reducers } from './store/app.reducers';
import { EduItemComponent } from './sections/education/edu-item/edu-item.component';
import { SkillItemComponent } from './sections/skills/skill-item/skill-item.component';
import { WorkComponent } from './sections/work/work.component';
import { WorkItemComponent } from './sections/work/work-item/work-item.component';
import { ProjectItemComponent } from './sections/projects/project-item/project-item.component';
import { FilterPipe } from './shared/filter.pipe';
import {NgsRevealModule} from 'ng-scrollreveal';
import { MainComponent } from './main/main.component';
import { SortbyPipe } from './shared/sortby.pipe';
import { EduItemCourseComponent } from './sections/education/edu-item/edu-item-course/edu-item-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EduItemComponent,
    SkillItemComponent,
    WorkComponent,
    WorkItemComponent,
    ProjectItemComponent,
    FilterPipe,
    NavigationComponent,
    MainComponent,
    SortbyPipe,
    EduItemCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    NgsRevealModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
