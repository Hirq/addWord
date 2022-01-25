import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import { db } from '../firebase-config'; 
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const AdminPanel = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {login: login, password: password});
    alert('You create new account login: ' + login);
    setTimeout(() => { 
      window.location.reload(false);
    }, 1)
  };

  const deleteUser = async (id) => { 
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getUsers()
  }, [])

  return(
    <ListTemplate>
      <Paragraph> Account count: {users.length} </Paragraph>
      <Paragraph>
        {users.map((user) => (
          <div key={user.id}>
            {user.login} - {user.password} <Button secondary onClick={() => deleteUser(user.id)}> Delete user </Button> 
          </div>
        ))}
      </Paragraph>

        

    </ListTemplate>
  )
}

export default AdminPanel;