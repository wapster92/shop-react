import React, {useEffect, useState} from 'react';

import {api} from "../../api";
import DefaultDictionary, {Column} from "../dictionary/DefaultDictionary";
import {useNavigate} from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();
  const getUsers = async () => {
    const {data} = await api.getAllUsers();
    setUsers(data.data)
  }
  useEffect(() => {
    getUsers();
  }, [])

  const clickRow = (id: number) => {
    navigate(`/users/${id}`);
  }

  const columns: Column[] = [
    {
      name: 'Фамилия',
      key: 'lastName'
    },
    {
      name: 'Имя',
      key: 'firstName'
    },
  ];

  return (
    <DefaultDictionary data={users} columns={columns} clickRow={clickRow}></DefaultDictionary>
  );
};

export default UsersTable;
