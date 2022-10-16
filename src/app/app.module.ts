import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, 
  NbButtonModule, NbContextMenuModule, NbMenuModule, 
  NbActionsModule, NbCardModule } from '@nebular/theme';
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
    NbThemeModule.forRoot({ name: 'dark' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule,
    NbCardModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
