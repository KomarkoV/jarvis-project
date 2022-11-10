import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jarvis-project';
  sections = ['aboutCard', 'techStackCard', 'roadmapCard'];

  menuItems: NbMenuItem[] = [
    {
      title: 'About Project',
      expanded: true,
      children: [
        {
          title: 'Overview',
        },
        {
          title: 'Features',
        },
        {
          title: 'Contact',
        },
      ],
    },
    {
      title: 'Tech Stack',
      children: [
        {
          title: 'Hardware',
        },
        {
          title: 'Mobile App',
        },
        {
          title: 'Analytics Portal',
        },
      ],
    },
    {
      title: 'Roadmap'
    },
  ];
}
