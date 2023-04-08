import { Meta, StoryFn } from '@storybook/react';
import { Gallery, GalleryProps } from '../components/form/Gallery';

export default {
  title: 'Components/Gallery',
  component: Gallery,
} as Meta;

const Template: StoryFn<GalleryProps> = (args) => <Gallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  galleryWidth: 'default',
};

export const Small = Template.bind({});
Small.args = {
  galleryWidth: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  galleryWidth: 'lg',
};
