import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
