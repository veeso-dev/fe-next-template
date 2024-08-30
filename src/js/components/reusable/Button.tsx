import * as React from 'react';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;

const Primary = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button
    type={(props.type as ButtonType) ?? 'button'}
    className={`${props.className} text-brandLight bg-brand bg-brand/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-zinc-100 disabled:text-zinc-500  disabled:cursor-not-allowed`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const Alternative = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button
    type={(props.type as ButtonType) ?? 'button'}
    className={`${props.className} py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-brand focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-brandAlt focus:z-10 focus:ring-4 focus:ring-gray-200 :ring-gray-700  disabled:bg-zinc-100 disabled:text-zinc-500  disabled:cursor-not-allowed`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const Tertiary = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button
    type={(props.type as ButtonType) ?? 'button'}
    className={`${props.className} text-brandLight bg-transparent border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-zinc-100 disabled:text-zinc-500  disabled:cursor-not-allowed`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const Danger = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button
    type={(props.type as ButtonType) ?? 'button'}
    className={`${props.className} text-white bg-red-500 hover:bg-red-700 border border-red-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-zinc-100 disabled:text-zinc-500  disabled:cursor-not-allowed`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const Icon = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button
    type={(props.type as ButtonType) ?? 'button'}
    className={`${props.className} h-fit text-white bg-brand hover:bg-brandAlt focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default {
  Primary,
  Alternative,
  Danger,
  Icon,
  Tertiary,
};
