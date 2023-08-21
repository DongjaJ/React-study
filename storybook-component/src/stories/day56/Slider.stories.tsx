import Spacer from '../../components/day55/Spacer';
import Icon from '../../components/day56/Icon';
import Slider from '../../components/day56/Slider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day56/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    onChange: { action: 'onChange' },
  },
  args: {
    defaultValue: 1,
    min: 1,
    max: 100,
    step: 0.1,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Slider {...args} />,
};

export const VolumeControlDefault: Story = {
  render: () => (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: 'inline-block' }} />
      <Icon name="volume-2" />
    </Spacer>
  ),
};
