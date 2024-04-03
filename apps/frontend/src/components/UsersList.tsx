import { useEffect, useState } from 'react';

type UsersType = {
  id: number;
  name: string;
}[];

export const UsersList = () => {
  const [users, setUsers] = useState<UsersType>([]);

  useEffect(() => {
    //setUsers(_users);
    fetch('/users')
      .then((response) => response.json())
      .then((data) => {
        const usersFromApi: UsersType = data;
        setUsers(usersFromApi);
      });
  }, []);

  return (
    <div className="container">
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
