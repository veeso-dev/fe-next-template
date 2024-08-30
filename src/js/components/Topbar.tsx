'use client';

import * as React from 'react';

import Desktop from './Topbar/Desktop';
import Mobile from './Topbar/Mobile';
import { Route } from '../utils/routes';
import { MenuEntry } from './Topbar/MenuEntries';

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
    <Desktop entries={MENU_ENTRIES} />
    <Mobile entries={MENU_ENTRIES} />
  </header>
);

export default Topbar;
