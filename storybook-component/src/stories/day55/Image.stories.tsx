import Image from '../../components/day55/Image';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day55/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    block: { control: 'boolean' },
    lazy: { control: 'boolean' },
    src: { control: 'text' },
    placeholder: { control: 'text' },
    threshold: { control: 'number' },
    width: { control: { type: 'range', min: 200, max: 600 } },
    height: { control: { type: 'range', min: 200, max: 600 } },
    alt: { control: 'text' },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    placeholder: 'https://via.placeholder.com/300',
    width: 200,
    height: 200,
    block: true,
    threshold: 0.5,
    lazy: false,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => <Image {...args} />,
};
export const Lazy: Story = {
  render: (args) => (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} lazy src={`${args.src}?${i}`} />
      ))}
    </div>
  ),
};
