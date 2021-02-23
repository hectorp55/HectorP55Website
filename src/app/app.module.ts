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
import { SliderCarouselModule } from 'slider-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderCardComponent,
    ProjectRowTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
