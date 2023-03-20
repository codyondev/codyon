import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FashionProfile from './FashionProfile';

export default {
  title: 'Landing/Fashion profile Component',
  component: FashionProfile,
} as ComponentMeta<typeof FashionProfile>;

const Template: ComponentStory<typeof FashionProfile> = (args) => (
  <FashionProfile {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  mbti: 'FEMD',
  description:
    '날이 좋아서, 날이 좋지 않아서, 날이 적당해서. 모든 날에 화려하고 싶었다.',
  id: 'yxrxm_',
  thumbnail: '/images/example-1.svg',
};
