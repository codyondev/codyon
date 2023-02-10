import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Article from '.';

export default {
  title: 'MBTI/Article Component',
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  order: 2,
  text: '나는 어느 정도 노출있는 옷도 과감하게 시도할 수 있습니다.',
};
