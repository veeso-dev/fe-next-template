import * as React from 'react';

import { Route } from '../../utils/routes';
import Link from './Menu/Link';
import Dropdown from './Menu/Dropdown';

export interface MenuEntry {
  name: string;
  route?: Route;
  externalLink?: string;
  url?: string;
  dropdown?: DropdownEntry[];
}

export interface DropdownEntry {
  name: string;
  route?: Route;
  externalLink?: string;
  url?: string;
}

const MenuEntries = ({ entries }: { entries: MenuEntry[] }) => {
  const children = entries.map((entry) => {
    if (entry.route) {
      // check if entry.route is a Route object
      return (
        <Link.RouterLink key={entry.name} to={entry.route}>
          {entry.name}
        </Link.RouterLink>
      );
    } else if (entry.url) {
      return (
        <Link.RouterLink key={entry.name} to={entry.url}>
          {entry.name}
        </Link.RouterLink>
      );
    } else if (entry.externalLink) {
      return (
        <Link.NavLink key={entry.name} href={entry.externalLink}>
          {entry.name}
        </Link.NavLink>
      );
    } else if (entry.dropdown) {
      return (
        <Dropdown key={entry.name} name={entry.name} entries={entry.dropdown} />
      );
    } else {
      return <></>;
    }
  });

  return <>{children}</>;
};

export default MenuEntries;
