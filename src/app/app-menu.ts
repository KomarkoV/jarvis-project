import { NbMenuItem } from '@nebular/theme';
export const MenuItems: NbMenuItemRoutable[] = [
    {
      title: 'About Project',
      home: true,
      route: '/about',
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
      route: '/tech-stack',
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
      route: '/roadmap',
      title: 'Roadmap',
      link: 'roadmap',
    },
  ];

export declare class NbMenuItemRoutable extends NbMenuItem {
  route: string | null | undefined
}