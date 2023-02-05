import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Brand from '.';

export default {
  title: 'Landing/Brand Component',
  component: Brand,
} as ComponentMeta<typeof Brand>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: '우영미',
  logo: '/images/wooyoungmi.svg',
  rank: 1,
};
