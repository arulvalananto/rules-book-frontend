import React from "react";
import { Route } from "react-router";
import AddRule from "./AddRule.page";
import Main from "./Main.page";

const Home = () => {
  console.log("Listen audios in both english and tamil other ages".length);
  return (
    <div className="">
      <nav className="h-16 border-black border-b-2 flex items-center justify-center">
        <p className="font-title">Rules Book</p>
      </nav>
      <Route path="/" exact component={Main} />
      <Route path="/add-rule" component={AddRule} />
    </div>
  );
};

export default Home;
