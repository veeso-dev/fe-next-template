import * as React from 'react';
import Image from 'next/image';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import MenuEntries, { MenuEntry } from './MenuEntries';

const Desktop = ({ entries }: { entries: MenuEntry[] }) => (
  <Container.FlexRow className="sm:hidden fixed bg-brand text-brandLight items-center gap-8 justify-center left-0 py-2 px-1 top-0 w-screen h-[80px] z-40 shadow-lg">
    <Container.FlexRow className="w-page justify-center items-center h-full gap-4">
      <Container.FlexRow>
        <Container.Flex className="items-center px-4">
          <a href={Route.url(Route.HOME)} className="cursor-pointer">
            <Image
              src={'https://placehold.co/64'}
              alt="logo"
              className="cursor-pointer"
              loading="eager"
              width={64}
              height={64}
            />
          </a>
        </Container.Flex>
        <nav className="flex gap-8 justify-between">
          <MenuEntries entries={entries} />
        </nav>
      </Container.FlexRow>
    </Container.FlexRow>
  </Container.FlexRow>
);

export default Desktop;
