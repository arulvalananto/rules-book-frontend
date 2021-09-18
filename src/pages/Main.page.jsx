import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.component";

const Main = () => {
  return (
    <div>
      <section className="container m-auto mt-5">
        <h2 className="font-title underline pl-2">Pinned:</h2>
        <div className="flex flex-wrap flex-row items-center my-5">
          <Card number={1} content="Please dont reply me" pinned />
          <Card number={2} content="Please dont reply me" pinned />
          <Card number={3} content="Please dont reply me" pinned />
        </div>
      </section>
      <main className="container m-auto">
        <h2 className="font-title underline pl-2">Rules:</h2>
        <div className="flex flex-wrap flex-row items-center my-5">
          <Card number={1} content="Please dont reply me" />
          <Card number={2} content="Please dont reply me" />
          <Card number={3} content="Please dont reply me" />
          <Card number={4} content="Please dont reply me" />
          <Card number={5} content="Sing a song" />
          <Card number={6} content="Dont close with anyone" />
          <Card number={7} content="Play with Juggling ball" />
          <Card
            number={8}
            content="Listen audios in both english and tamil other ages"
          />
        </div>
        <Link
          to="/add-rule"
          className="position fixed right-2 bottom-2 2xl:right-5 2xl:bottom-5 xl:right-5 xl:bottom-5 w-14 h-14 animation-ripple"
        >
          <img
            src="https://img.icons8.com/plasticine/100/000000/plus-2-math.png"
            className="animation-ripple"
            alt="rules book add button"
          />
        </Link>
      </main>
    </div>
  );
};

export default Main;
