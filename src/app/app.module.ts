import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgsRevealModule } from 'ng-scrollreveal';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ContactComponent } from './sections/contact/contact.component';
import { reducers } from './store/app.reducers';
import { EduItemComponent } from './sections/education/edu-item/edu-item.component';
import { SkillItemComponent } from './sections/skills/skill-item/skill-item.component';
import { WorkComponent } from './sections/work/work.component';
import { WorkItemComponent } from './sections/work/work-item/work-item.component';
import { FilterPipe } from './shared/filter.pipe';
import { MainComponent } from './main/main.component';
import { SortbyPipe } from './shared/sortby.pipe';
import { EduItemCourseComponent } from './sections/education/edu-item/edu-item-course/edu-item-course.component';
import { WorkEditComponent } from './sections/work/work-edit/work-edit.component';
import { AuthEffects } from './auth/auth.effects';
import { EduEditComponent } from './sections/education/edu-item/edu-edit/edu-edit.component';
import { SkillEditComponent } from './sections/skills/skill-item/skill-edit/skill-edit.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    EduItemComponent,
    SkillItemComponent,
    WorkComponent,
    WorkItemComponent,
    FilterPipe,
    MainComponent,
    SortbyPipe,
    EduItemCourseComponent,
    WorkEditComponent,
    EduEditComponent,
    SkillEditComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    NgsRevealModule.forRoot(),
    FlashMessagesModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
