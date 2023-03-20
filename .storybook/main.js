const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-next-router',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules',
      'styles',
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, '../pages'),
      '@components': path.resolve(__dirname, '../components'),
      '@public': path.resolve(__dirname, '../public'),
      '@libs': path.resolve(__dirname, '../libs'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@models': path.resolve(__dirname, '../models'),
      '@styles': path.resolve(__dirname, '../styles'),
      '@constants': path.resolve(__dirname, '../constants'),
      '@mocks': path.resolve(__dirname, '../mocks'),
      '@store': path.resolve(__dirname, '../store'),
      '@requests': path.resolve(__dirname, '../requests'),
      '@types': path.resolve(__dirname, '../types'),
    };

    return config;
  },
};
