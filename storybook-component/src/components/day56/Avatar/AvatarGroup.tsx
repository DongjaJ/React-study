import React, { ReactNode, ReactElement } from 'react';

type AvatarGroupProps = {
  children: ReactNode;
  shape?: 'circle' | 'round' | 'square';
  size?: number;
};

const AvatarGroup = ({
  children,
  shape = 'circle',
  size = 70,
  ...props
}: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children)
    .filter(
      (element): element is ReactElement =>
        React.isValidElement(element) && element.props.__TYPE === 'Avatar'
    )
    .map((avatar, index, avatars) =>
      React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      })
    );

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
