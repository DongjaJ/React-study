import styled from '@emotion/styled';

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  rotate?: number;
};

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  color = '#222',
  rotate,
  ...props
}: IconProps) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };

  const icon = require('feather-icons').icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
