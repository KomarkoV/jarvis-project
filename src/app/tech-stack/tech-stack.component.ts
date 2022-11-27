import { Component, OnInit } from '@angular/core';
import { Projects } from './tech-stack-list';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  hardwareProject: Project = Projects.filter(x => x.id === 'hardware')[0];
  mobileAppProject: Project = Projects.filter(x => x.id === 'mobile')[0];
  analyticsPortalProject: Project = Projects.filter(x => x.id === 'cloud')[0];

  ngOnInit(): void {
  }
}

export interface Project {
  id: string,
  displayName: string,
  techStack: TechStack[]
}

export interface TechStack {
  technologyName: string,
  iconPath: string
}