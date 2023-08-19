import { Meta, StoryObj } from '@storybook/react';
import SignUpForm from '../../components/day54-form/SignUpForm';

const meta = {
  title: 'Day54/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
