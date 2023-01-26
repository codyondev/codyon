import { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Component/Layout Component',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
