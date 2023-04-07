import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from '../components/UserInput';

export default {
  title: 'Components/UserInput',
  component: Input,
  argTypes: {
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

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  type: 'text',
};

export const Email = Template.bind({});
Email.args = {
  name: 'Email',
  type: 'text',
  _size: 'default',
};

export const Password = Template.bind({});
Password.args = {
  name: 'Password',
  type: 'password',
  _size: 'sm',
};
