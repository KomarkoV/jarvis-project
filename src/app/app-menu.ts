import { NbMenuItem } from '@nebular/theme';
export const MenuItems: NbMenuItem[] = [
    {
      title: 'About Project',
      expanded: true,
      home: true,
      children: [
        {
          title: 'Overview',
          link: 'about',
        },
        {
          title: 'Features',
          link: 'about',
        },
        {
          title: 'Contact',
          link: 'about',
        },
      ],
    },
    {
      title: 'Tech Stack',
      children: [
        {
          title: 'Hardware',
          link: 'tech-stack',
        },
        {
          title: 'Mobile App',
          link: 'tech-stack',
        },
        {
          title: 'Analytics Portal',
          link: 'tech-stack',
        },
      ],
    },
    {
      title: 'Roadmap',
      link: 'roadmap'
    },
  ];