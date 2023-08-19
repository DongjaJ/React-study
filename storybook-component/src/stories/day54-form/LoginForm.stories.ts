import { Meta, StoryObj } from '@storybook/react';
import LoginForm from '../../components/day54-form/LoginForm';

const meta = {
  title: 'Day54/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
