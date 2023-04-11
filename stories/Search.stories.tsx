import { Meta, StoryFn } from '@storybook/react';
import { Search, SearchProps } from '../components/Searchbar';

export default {
  title: 'Components/Searchbar',
  component: Search,
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

const Template: StoryFn<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Search',
};
