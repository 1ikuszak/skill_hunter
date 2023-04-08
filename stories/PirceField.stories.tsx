import { Meta, StoryFn } from '@storybook/react';
import { InputProps, PriceField } from '../components/form/PriceField';

export default {
  title: 'Components/form/PriceField',
  component: PriceField,
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

const Template: StoryFn<InputProps> = (args) => <PriceField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Price',
  type: 'text',
};
