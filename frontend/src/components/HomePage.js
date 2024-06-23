import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const HomePage = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  const loadUsers = async () => {
    // function to reload users, to be passed to child components
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm userToEdit={userToEdit} loadUsers={loadUsers} />
      <UserList loadUsers={loadUsers} />
    </div>
  );
};

export default HomePage;
