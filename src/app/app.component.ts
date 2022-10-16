import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('fullpageRef') fp_directive: any;
  config: any;
  fullpage_api: any;
  title = 'jarvis-project';

  constructor() {
    this.config = {
      navigation: true,
      anchors: ['about', 'roadmap', 'tech-stack'],
      licenseKey: ''
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
