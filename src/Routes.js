import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const routes = () => {
  const logado = localStorage.getItem('@user');

  return (
    <BrowserRouter>
      <Switch>
        {!logado && <Route path="/" exact component={Login} />}
        {logado && <Route path="/" exact component={Home} />}
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
