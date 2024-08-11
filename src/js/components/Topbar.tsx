'use client';

import * as React from 'react';

import Desktop from './Topbar/Desktop';
import Mobile from './Topbar/Mobile';
import { Route } from '../utils/routes';

interface MenuEntry {
  name: string;
  route?: Route;
  externalLink?: string;
  url?: string;
}

export const MENU_ENTRIES: MenuEntry[] = [
  {
    name: 'Home',
    route: Route.HOME,
  },
  {
    name: 'Blog',
    externalLink: 'https://blog.expocats.com/',
  },
];

const Topbar = () => (
  <header>
    <Desktop />
    <Mobile />
  </header>
);

export default Topbar;
