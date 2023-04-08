import { Meta, StoryFn } from '@storybook/react';
import { InputProps, NameField } from '../components/form/NameField';

export default {
  title: 'Components/form/NameField',
  component: NameField,
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

const Template: StoryFn<InputProps> = (args) => <NameField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  type: 'text',
};
