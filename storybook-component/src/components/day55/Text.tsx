import './Text.css';
import { ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
  block?: boolean;
  paragraph?: boolean;
  size?: number | string;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
  mark?: boolean;
  code?: boolean;
}

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
}: ComponentProps) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: typeof size === 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  if (del) {
    children = <del>{children}</del>;
  }
  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }

  return (
    <Tag
      className={typeof size === 'string' ? `text--size-${size}` : undefined}
      style={{ ...fontStyle }}>
      {children}
    </Tag>
  );
};

export default Text;
