import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { appRouter } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import {
  LandingComponent,
  AboutMeComponent,
  ItComponent,
  PhysicsComponent,
  MediaComponent,
  SelfEducationComponent
} from './pages';

import { InViewportModule } from 'ng-in-viewport';
import 'intersection-observer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';

import { AnimationService } from './services/animation.service';

import {
  AtomComponent,
  BooksComponent,
  MacbookComponent,
  MapComponent,
  PcDeskComponent,
  PhysicsDeviceComponent,
  PrinterComponent
} from './objects';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LandingComponent,
    AboutMeComponent,
    ItComponent,
    PhysicsComponent,
    MediaComponent,
    SelfEducationComponent,
    AtomComponent,
    PrinterComponent,
    BooksComponent,
    MapComponent,
    PcDeskComponent,
    MacbookComponent,
    PhysicsDeviceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRouter,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    InViewportModule,
    FlexLayoutModule,
    NguCarouselModule
  ],
  providers: [AnimationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
