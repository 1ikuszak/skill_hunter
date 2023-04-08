import { Meta, StoryFn } from '@storybook/react';
import { InputProps, TimeField } from '../components/form/TimeField';

export default {
  title: 'Components/form/TimeField',
  component: TimeField,
  argTypes: {
    variant: {
      control: { type: 'text', options: ['default'] },
    },
    name: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select', options: ['text', 'email', 'password'] },
    },
    _size: {
      control: { type: 'select', options: ['default', 'sm', 'lg'] },
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <TimeField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Time',
  type: 'text',
};
