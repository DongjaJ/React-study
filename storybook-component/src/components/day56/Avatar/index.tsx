import styled from '@emotion/styled';
import ImageComponent from '../../day55/Image';
import { useEffect, useState } from 'react';
import AvatarGroup from './AvatarGroup';

type WrapperProps = {
  shape: 'circle' | 'round' | 'square';
};

type AvatarProps = {
  lazy?: boolean;
  threshold?: number;
  src: string;
  size?: number;
  shape?: 'circle' | 'round' | 'square';
  placeholder?: string;
  alt?: string;
  mode?: string;
  __TYPE?: string;
};

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0',
};

const AvatarWrapper = styled.div<WrapperProps>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  overflow: hidden;
  background-color: #eee;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'cover',
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: 'Avatar',
};

Avatar.group = AvatarGroup;

export default Avatar;
