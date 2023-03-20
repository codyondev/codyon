import { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from './Layout';

export default {
  title: 'Layout/Layout Component',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
