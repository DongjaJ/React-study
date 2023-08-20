import { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  level?: number;
  strong?: boolean;
  underline?: boolean;
  color?: string;
  [key: string]: any;
};

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}: HeaderProps) => {
  const isInvalidLevel = level < 1 || level > 6;
  if (isInvalidLevel) {
    throw new Error('Header only accept "1 ~ 6" as "level" value');
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const fontStyle = {
    fontWeight: strong ? 'font-bold' : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Header;
