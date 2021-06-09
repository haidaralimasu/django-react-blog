import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import About from './core/About';
import Blog from './core/Blog';
import BlogDetail from './core/BlogDetail';
import Error from './core/Error'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:id" exact component={BlogDetail} />
      <Route path="/about" exact component={About} />
      <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;