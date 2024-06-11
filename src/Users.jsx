import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import Axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get('http://localhost:8080/api/v1/getusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log("Axios Errors");
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:8080/api/v1/adduser', payload)
      .then(response => {
        getUsers();
        setSubmitted(false);
      })
      .catch(error => {
        console.log("Axios Errors");
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put('http://localhost:8080/api/v1/updateuser', payload)
      .then(response => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
        setSelectedUser({});
      })
      .catch(error => {
        console.log("Axios Errors");
      });
  };

  const deleteUser = (data) => {
    const payload = { id: data.id };

    Axios.delete('http://localhost:8080/api/v1/deleteuser', { data: payload })
      .then(() => {
        getUsers();
      })
      .catch(error => {
        console.log("Axios Errors");
      });
  };

  return (
    <>
      <UserForm 
        addUser={addUser} 
        updateUser={updateUser} 
        isEdit={isEdit} 
        data={selectedUser} 
      />
      
      <UsersTable 
        rows={users}
        selectedUser={data => {
          setSelectedUser(data);
          setIsEdit(true);
        }} 
        deleteUser={data => {
          if (window.confirm('Are you sure?')) {
            deleteUser(data);
          }
        }}
      />
    </>
  );
}

export default Users;
