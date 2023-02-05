import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AdvertisingBanner from '.';

export default {
  title: 'Landing/Ad Banner Component',
  component: AdvertisingBanner,
} as ComponentMeta<typeof AdvertisingBanner>;

const Template: ComponentStory<typeof AdvertisingBanner> = (args) => (
  <AdvertisingBanner {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: '빼곡히 잡힌 연말 약속에 입을 옷이 걱정된다면',
  description: '무신사에서 연말룩 첫 구매시 50% 할인',
};
