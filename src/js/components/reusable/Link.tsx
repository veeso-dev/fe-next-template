import NextLink from 'next/link';
import * as React from 'react';
import { Route } from '../../utils/routes';

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href?: string | Route;
}

const resolve = (href?: string | Route): string | undefined => {
  if (!href) return undefined;

  return Route.isRoute(href) ? Route.url(href as Route) : href;
};

const Default = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} text-inherit cursor-pointer hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const Next = (props: LinkProps) => (
  <NextLink
    href={resolve(props.href) ?? ''}
    className={`${props.className} w-fit font-medium text-inherit cursor-pointer hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </NextLink>
);

const Button = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} px-5 py-2.5 mr-2 mb-2 font-medium text-brandLight bg-brand hover:bg-brandAlt focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const ButtonAlt = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} border border-gray-200 hover:bg-amber-50 font-medium text-brand bg-brandLight focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const ButtonAlt2 = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} border border-gray-200 hover:bg-gray-50 font-medium text-brand bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const Paragraph = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} !text-brand font-medium text-inherit cursor-pointer underline hover:no-underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const IconLink = (props: LinkProps) => (
  <a
    href={resolve(props.href)}
    className={`${props.className} inline-flex items-center font-medium text-inherit hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

export default {
  Button,
  ButtonAlt,
  ButtonAlt2,
  Default,
  IconLink,
  Next,
  Paragraph,
};
