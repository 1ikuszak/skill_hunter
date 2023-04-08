import { Meta, StoryFn } from '@storybook/react';
import { Select, SelectProps } from '../components/form/SelectField';

export default {
  title: 'Components/form/SelectField',
  component: Select,
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

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
};
