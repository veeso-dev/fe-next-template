import * as React from 'react';
import Image from 'next/image';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import MenuEntries, { MenuEntry } from './MenuEntries';
import Link from './Menu/Link';

const Mobile = ({ entries }: { entries: MenuEntry[] }) => (
  <div className="hidden sm:flex left-0 top-0 w-full fixed z-40 flex-col">
    <div className="h-[80px] flex items-center bg-brand gap-4 justify-start py-2 px-4">
      <Container.Flex className="w-full items-center gap-4">
        <a href={Route.url(Route.HOME)} className="cursor-pointer">
          <Image
            src={'https://placehold.co/64'}
            alt="Logo"
            width={64}
            height={64}
          />
        </a>
        <Container.Container>
          <Link.RouterLink to={Route.HOME}>
            <span className="text-xl text-brandLight">Nome sito</span>
          </Link.RouterLink>
        </Container.Container>
      </Container.Flex>
    </div>
    <div className="h-[40px] bg-brandLight shadow-lg">
      <Container.FlexRow className="gap-4 text-brand items-center justify-center h-full">
        <MenuEntries entries={entries} />
      </Container.FlexRow>
    </div>
  </div>
);

export default Mobile;
