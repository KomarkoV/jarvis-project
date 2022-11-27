import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, 
  NbButtonModule, NbContextMenuModule, NbMenuModule, 
  NbActionsModule, NbCardModule, NbTabsetModule, NbListModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AboutComponent } from './home/about.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

import { GoogleChartsModule } from 'angular-google-charts';

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
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
