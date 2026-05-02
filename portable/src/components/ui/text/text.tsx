import { ComponentChildren } from 'preact';

interface TextProps {
  children: string | ComponentChildren;
}

export function Text({ children }: TextProps) {
  return <span>{children}</span>;
}

