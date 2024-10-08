import * as React from 'react';

import Link from '../../reusable/Link';
import { Route } from '../../../utils/routes';

interface RouterLinkProps {
  to: Route | string;
  children: React.ReactNode;
}

const RouterLink = (props: RouterLinkProps) => (
  <Link.Next
    className="text-lg xl:text-xl font-medium sm:text-sm py-8 sm:py-0 hover:text-bgContentHover sm:hover:text-brandAlt sm:text-brand block no-underline hover:underline"
    href={props.to}
  >
    {props.children}
  </Link.Next>
);

interface NavLinkProps {
  onClick?: () => void;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => (
  <Link.Default
    className="text-lg xl:text-xl font-medium sm:text-sm hover:cursor-pointer py-8 sm:py-0 hover:text-bgContentHover sm:hover:text-brandAlt sm:text-brand block no-underline hover:underline"
    onClick={props.onClick}
    href={props.href}
    target={props.target}
  >
    {props.children}
  </Link.Default>
);

const DropdownLink = (props: RouterLinkProps) => (
  <Link.Next
    className="h-full text-lg xl:text-xl sm:text-sm !text-brand hover:text-brandHover block no-underline"
    href={props.to}
  >
    {props.children}
  </Link.Next>
);

export default {
  DropdownLink,
  NavLink,
  RouterLink,
};
