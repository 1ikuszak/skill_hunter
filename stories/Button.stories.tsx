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
        options: [
          'default',
          'destructive',
          'outline',
          'subtle',
          'ghost',
          'link',
        ],
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

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Subtle Button',
  variant: 'subtle',
  size: 'lg',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  size: 'sm',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link Button',
  variant: 'link',
  href: 'https://example.com',
};
