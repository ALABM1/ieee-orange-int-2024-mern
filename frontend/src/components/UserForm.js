import React, { useState } from 'react';
import { registerUser, updateUser } from '../services/api';

const UserForm = ({ userToEdit, loadUsers }) => {
  const [user, setUser] = useState(userToEdit || {
    first_name: '',
    last_name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userToEdit) {
      await updateUser(userToEdit.id, user);
    } else {
      await registerUser(user);
    }
    loadUsers();
    setUser({ first_name: '', last_name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="date"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
