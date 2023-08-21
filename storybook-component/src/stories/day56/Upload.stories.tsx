import Upload from '../../components/day56/Upload';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Day56/Upload',
  component: Upload,
  tags: ['autodocs'],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Droppable: Story = {
  render: () => (
    <Upload droppable>
      {(file: any, dragging: Boolean) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? 'black' : '#aaa',
          }}>
          {file ? file.name : 'Click or drag file to this area to upload'}
        </div>
      )}
    </Upload>
  ),
};

export const Default: Story = {
  render: (args) => (
    <Upload {...args}>
      {(file: File) => <button>{file ? file.name : 'Click me'}</button>}
    </Upload>
  ),
};
