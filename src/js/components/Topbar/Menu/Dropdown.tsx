'use client';

import * as React from 'react';
import * as Icon from 'react-feather';

import { DropdownEntry } from '../MenuEntries';
import Link from './Link';
import Container from '../../reusable/Container';

interface Props {
  name: string;
  entries: DropdownEntry[];
}

const Dropdown = ({ name, entries }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdwon = () => {
    setIsOpen(!isOpen);
  };

  const onClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <Container.Container className="relative">
      <DropdownButton
        name={name}
        isOpen={isOpen}
        onClick={toggleDropdwon}
        onHover={setIsOpen}
      >
        <DropdownMenu onClickOutside={onClickOutside} entries={entries} />
      </DropdownButton>
    </Container.Container>
  );
};

const DropdownButton = ({
  name,
  isOpen,
  onClick,
  onHover,
  children,
}: {
  name: string;
  isOpen: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
  children?: React.ReactNode;
}) => {
  const handleMouseEnter = () => {
    onHover(true);
  };

  const handleMouseLeave = () => {
    onHover(false);
  };

  return (
    <Container.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container.FlexRow className="relative items-center justify-between">
        <Link.NavLink onClick={onClick}>{name}</Link.NavLink>
        {isOpen ? (
          <Icon.ChevronUp
            className="text-brandLight sm:text-brand hover:text-bgContentHover sm:hover:text-brandHover hover:cursor-pointer"
            onClick={onClick}
          />
        ) : (
          <Icon.ChevronDown
            className="text-brandLight sm:text-brand hover:text-bgContentHover sm:hover:text-brandHover hover:cursor-pointer"
            onClick={onClick}
          />
        )}
      </Container.FlexRow>
      {isOpen && children}
    </Container.Container>
  );
};

const DropdownMenu = ({
  onClickOutside,
  entries,
}: {
  onClickOutside: () => void;
  entries: DropdownEntry[];
}) => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      // Rimuovi l'event listener quando il componente viene smontato
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container.FlexCols className="animate__animated animate__fadeIn absolute left-[-75%] sm:left-0 top-[80px] sm:top-[30px] rounded-b-lg bg-brandLight shadow-xl h-fit w-[256px]">
      <div ref={dropdownRef}>
        {entries.map((entry) => (
          <DropdownItem key={entry.name} entry={entry} />
        ))}
      </div>
    </Container.FlexCols>
  );
};

const DropdownItem = ({ entry }: { entry: DropdownEntry }) => (
  <Container.Container className="hover:bg-bgContentHover px-4 py-4 sm:py-2">
    <DropdownLink entry={entry} />
  </Container.Container>
);

const DropdownLink = ({ entry }: { entry: DropdownEntry }) => {
  if (entry.route) {
    // check if entry.route is a Route object
    return (
      <Link.DropdownLink key={entry.name} to={entry.route}>
        {entry.name}
      </Link.DropdownLink>
    );
  } else if (entry.url) {
    return (
      <Link.DropdownLink key={entry.name} to={entry.url}>
        {entry.name}
      </Link.DropdownLink>
    );
  } else if (entry.externalLink) {
    return (
      <Link.DropdownLink key={entry.name} to={entry.externalLink}>
        {entry.name}
      </Link.DropdownLink>
    );
  } else {
    return <></>;
  }
};

export default Dropdown;
