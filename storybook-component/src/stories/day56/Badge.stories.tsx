import Badge from '../../components/day56/Badge';
import Image from '../../components/day55/Image';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day56/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    showZero: { control: 'boolean' },
  },
  args: {
    count: 10,
    maxCount: 100,
    showZero: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  ),
};

export const Dot: Story = {
  render: () => (
    <Badge dot>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  ),
};
