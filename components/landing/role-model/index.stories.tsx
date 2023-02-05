import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoleModel from '.';

export default {
  title: 'Landing/Role model Component',
  component: RoleModel,
} as ComponentMeta<typeof RoleModel>;

const Template: ComponentStory<typeof RoleModel> = (args) => (
  <RoleModel {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  job: '모델',
  name: 'ahepf',
  description: '에스파 같은 스타일리의 원조!! 이 언니가 하면 모노톤이 화려함',
  thumbnail: '/images/ahepf.svg',
};
