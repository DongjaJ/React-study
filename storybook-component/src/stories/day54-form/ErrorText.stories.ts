import type { Meta, StoryObj } from '@storybook/react';

import ErrorText from '../../components/day54-form/ErrorText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Day54/ErrorText',
  component: ErrorText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '에러 메시지입니다',
  },
};

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
