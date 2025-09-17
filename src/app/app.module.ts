import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ProjectRowTemplateComponent } from './projects/project-row-template/project-row-template.component';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceRowTemplateComponent } from './experience/experience-row-template/experience-row-template.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    HeaderCardComponent,
    ProjectRowTemplateComponent,
    ExperienceRowTemplateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
