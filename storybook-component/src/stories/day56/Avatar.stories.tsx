import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../../components/day56/Avatar';

const meta = {
  title: 'Day56/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'inline-radio', options: ['circle', 'round', 'square'] },
    size: { control: { type: 'range', min: 40, max: 200 } },
    mode: { control: 'inline-radio', options: ['contain', 'cover', 'fill'] },
  },
  args: {
    src: 'https://picsum.photos/200',
    shape: 'circle',
    size: 70,
    mode: 'cover',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
};

export const Groups: Story = {
  render: () => (
    <Avatar.group size={40}>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.group>
  ),
};
