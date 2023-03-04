import React from 'react';
import Header from "../header/Header";
import Error from "../../pages/Error";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import routes from "../../pages/router";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {routes.map(route => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
