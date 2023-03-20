import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Answer from './Answer';

export default {
  title: 'MBTI/Answer Component',
  component: Answer,
} as ComponentMeta<typeof Answer>;

const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...{ icon: '❤️‍🔥', text: '매우 그런 편이다' },
  current: true,
  index: 1,
};
