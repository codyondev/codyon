import { rest } from 'msw';

export const signup = (type?: 'error') => {
  return rest.post('/api/signup', (req, res, ctx) => {
    if (type === 'error') {
      return res(ctx.status(400));
    }
    return res(ctx.json({ result: 'ok' }));
  });
};

export default [signup()];
