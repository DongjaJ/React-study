import { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/day54-form/Input';

const meta = {
  title: 'Day54/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
