import React from 'react';
import UsersTable from "../components/users-table/UsersTable";
import {Route, Routes} from "react-router-dom";
import UsersId from "./UsersId";


const Users = () => {
  return (
    <React.Fragment>
      <UsersTable></UsersTable>
      <Routes>
        <Route path="/:id" element={<UsersId/>} />
      </Routes>
    </React.Fragment>
  )
};

export default Users;
