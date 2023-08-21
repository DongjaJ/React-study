import Spinner from '../../components/day55/Spinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day55/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
  render: (args) => <Spinner {...args} />,
};
