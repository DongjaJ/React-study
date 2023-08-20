import React, { ReactElement, ReactNode, CSSProperties } from 'react';

type SpaceProps = {
  children: ReactNode;
  type?: 'horizontal' | 'vertical';
  size?: number;
  style?: CSSProperties;
  [key: string]: any;
};

const Spacer = ({
  children,
  type = 'horizontal',
  size = 8,
  ...props
}: SpaceProps) => {
  const spacerStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  };

  const nodes = React.Children.toArray(children)
    .filter((element): element is ReactElement => React.isValidElement(element))
    .map((element, index, elements) =>
      React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight:
            type === 'horizontal' && index !== elements.length - 1
              ? size
              : undefined,
          marginBottom:
            type === 'vertical' && index !== elements.length - 1
              ? size
              : undefined,
        },
      })
    );

  return (
    <div {...props} style={{ ...spacerStyle }}>
      {nodes}
    </div>
  );
};

export default Spacer;
