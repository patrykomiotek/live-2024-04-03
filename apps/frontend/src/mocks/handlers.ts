import { http, HttpResponse } from 'msw';

const usersResolver = ({ request, params, cookies }) => {
  return HttpResponse.json([
    { id: 1, name: 'Johny' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'Sam' },
  ]);
};

export const handlers = [http.get('/users', usersResolver)];
