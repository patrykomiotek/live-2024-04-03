import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { UsersList } from './UsersList';

// const usersResolver = ({ request, params, cookies }) => {
//   return HttpResponse.json([
//     { id: 1, name: 'Johny' },
//     { id: 2, name: 'Bill' },
//     { id: 3, name: 'Sam' },
//   ]);
// };

const meta: Meta<typeof UsersList> = {
  component: UsersList,
  title: 'UsersList',
};
export default meta;

export const _UsersList = () => <UsersList />;
_UsersList.parameters = {
  msw: {
    handlers: [
      rest.get('/users', (req, res, ctx) => {
        return res(
          ctx.json([
            { id: 1, name: 'Johny' },
            { id: 2, name: 'Bill' },
            { id: 3, name: 'Sam' },
          ])
        );
      }),
    ],
  },
};
