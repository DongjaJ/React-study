import { Meta, StoryObj } from '@storybook/react';
import Toggle from '../../components/day55/Toggle';

const meta = {
  title: 'Day55/Toggle',
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
