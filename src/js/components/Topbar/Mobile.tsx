import * as React from 'react';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import { MENU_ENTRIES } from '../Topbar';
import Link from './Link';

const Mobile = () => {
  const entries = MENU_ENTRIES.map((entry) => {
    if (entry.route) {
      return (
        <Link.RouterLink key={entry.name} to={Route.url(entry.route)}>
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
    } else {
      <></>;
    }
  });

  return (
    <div className="hidden sm:flex left-0 top-0 w-full fixed z-40 flex-col">
      <div className="h-[80px] flex items-center bg-brand gap-4 justify-start py-2 px-4">
        <Container.Flex className="flex-1"></Container.Flex>
      </div>
      <div className="h-[40px] bg-brandLight shadow-lg">
        <Container.FlexRow className="gap-4 text-brand items-center justify-center h-full">
          {entries}
        </Container.FlexRow>
      </div>
    </div>
  );
};

export default Mobile;
