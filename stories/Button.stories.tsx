import { Meta, StoryFn } from '@storybook/react';
import '../app/globals.css';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'destructive', 'outline', 'link', 'google'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['default', 'sm', 'lg'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  size: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Destructive Button',
  variant: 'destructive',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link Button',
  variant: 'link',
  href: 'https://example.com',
};

export const Google = Template.bind({});
Google.args = {
  children: 'Google Button',
  variant: 'google',
};
