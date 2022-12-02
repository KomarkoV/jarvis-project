import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, 
  NbButtonModule, NbContextMenuModule, NbMenuModule, 
  NbActionsModule, NbCardModule, NbTabsetModule, NbListModule,
  NbIconModule, NbTooltipModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AboutComponent } from './home/about.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RoadMapComponent,
    TechStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule,
    NbCardModule,
    NbTabsetModule,
    NbListModule,
    NbTooltipModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
