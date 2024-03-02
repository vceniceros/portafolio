import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { TechnologiesComponentComponent } from './components/technologies-component/technologies-component.component';
import { ProjectsComponentComponent } from './components/projects-component/projects-component.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { RotatingTitleComponent } from './components/rotating-title/rotating-title.component';
import { TypingSubtitleComponent } from './components/typing-subtitle/typing-subtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FooterComponentComponent,
    PresentationComponent,
    AboutMeComponentComponent,
    TechnologiesComponentComponent,
    ProjectsComponentComponent,
    ToTopButtonComponent,
    HomeComponent,
    ContactComponentComponent,
    RotatingTitleComponent,
    TypingSubtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
