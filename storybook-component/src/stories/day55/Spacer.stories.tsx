import Spacer from '../../components/day55/Spacer';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day55/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 8, max: 64 } },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

type BoxProps = {
  block?: boolean;
  style?: CSSProperties;
};

const Box = ({ block, style }: BoxProps) => {
  return (
    <div
      style={{
        display: block ? 'block' : 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        ...style,
      }}></div>
  );
};

export const Horizontal: Story = {
  args: {
    type: 'horizontal',
  },
  render: (args) => {
    return (
      <Spacer {...args}>
        <Box block />
        <Box block />
        <Box block />
      </Spacer>
    );
  },
};

export const Vertical: Story = {
  args: {
    type: 'vertical',
  },
  render: (args) => {
    return (
      <Spacer {...args}>
        <Box />
        <Box />
        <Box />
      </Spacer>
    );
  },
};
