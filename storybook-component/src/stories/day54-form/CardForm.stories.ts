import { Meta, StoryObj } from '@storybook/react';
import CardForm from '../../components/day54-form/CardForm';

const meta = {
  title: 'Day54/CardForm',
  component: CardForm,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
