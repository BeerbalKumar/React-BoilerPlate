import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/" component={Login} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}
