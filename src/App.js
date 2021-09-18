import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home.page";
import SignIn from "./pages/SignIn.page";
import SignUp from "./pages/SignUp.page";

function App() {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <BrowserRouter>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
