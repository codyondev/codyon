import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const queyrClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queyrClient}>
      <Story />
    </QueryClientProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
