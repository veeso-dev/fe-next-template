import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import { MENU_ENTRIES } from '../Topbar';
import Link from './Link';

const Desktop = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(Route.url(Route.HOME));
  };

  const entries = MENU_ENTRIES.map((entry) => {
    if (entry.route) {
      // check if entry.route is a Route object
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
    <Container.FlexRow className="sm:hidden fixed bg-brand text-brandLight items-center gap-8 justify-center left-0 py-2 px-1 top-0 w-screen h-[80px] z-40 shadow-lg">
      <Container.FlexRow className="w-page justify-between items-center h-full gap-4">
        <Container.FlexRow>
          <Container.Flex className="items-center px-4">
            <Image
              src={'https://placehold.co/48'}
              alt="logo"
              className="cursor-pointer"
              loading="eager"
              width={48}
              height={48}
              onClick={goHome}
            />
          </Container.Flex>
          <nav className="flex gap-8 justify-between">{entries}</nav>
        </Container.FlexRow>
      </Container.FlexRow>
    </Container.FlexRow>
  );
};

export default Desktop;
