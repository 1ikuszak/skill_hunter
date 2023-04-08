import { Meta, StoryFn } from '@storybook/react';
import { TextAreaProps, Textarea } from '../components/form/DescritptionField';

export default {
  title: 'Components/form/Textarea',
  component: Textarea,
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

const Template: StoryFn<TextAreaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'description',
};
