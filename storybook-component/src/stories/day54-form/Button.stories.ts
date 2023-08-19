import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../components/day54-form/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Day54/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
