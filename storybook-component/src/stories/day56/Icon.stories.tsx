import Icon from '../../components/day56/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import { Buffer } from 'buffer';
window.Buffer = window.Buffer || Buffer;

const meta = {
  title: 'Day56/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: { type: 'range', min: 16, max: 80 } },
    strokeWidth: { control: { type: 'range', min: 16, max: 80 } },
    color: { control: 'color' },
    rotate: { control: { type: 'range', min: 0, max: 360 } },
  },
  args: {
    name: 'box',
    size: 16,
    strokeWidth: 2,
    color: '#222',
    rotate: 0,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};
