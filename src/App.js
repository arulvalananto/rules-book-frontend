import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
import SignIn from "./pages/SignIn.page";

function App() {
  return (
    <BrowserRouter>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
