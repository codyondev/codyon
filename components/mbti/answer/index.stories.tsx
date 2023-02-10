import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Answer from '.';

export default {
  title: 'MBTI/Answer Component',
  component: Answer,
} as ComponentMeta<typeof Answer>;

const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
