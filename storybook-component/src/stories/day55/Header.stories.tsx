import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../components/day55/Header';

const meta = {
  title: 'Day55/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    level: { control: { type: 'range', min: 1, max: 10 } },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => <Header {...args}>Header</Header>,
};
