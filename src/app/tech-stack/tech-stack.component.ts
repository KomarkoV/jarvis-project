import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  hardwareProject: Project = {
    projectName: "Hardware & Firmware",
    techStack: []
  };
  mobileAppProject: Project = {
    projectName: "Jarvis Mobile Dashboard",
    techStack: []
  };
  analyticsPortalProject: Project = {
    projectName: "Jarvis Analytics",
    techStack: []
  };

  constructor() { }

  ngOnInit(): void {
  }



}

interface Project {
  projectName: string,
  techStack: TechStack[]
}

interface TechStack {
  technologyName: string,
  iconPath: string
}