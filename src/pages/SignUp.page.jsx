import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.component";
import Input from "../components/Input.component";
import image from "../assets/signup.webp";

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    correctPassword: "",
  };

  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const isValidated = () => {
    let emailError, passwordError, correctPasswordError;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(credentials.email)) {
      emailError = "Please enter valid email address";
    }
    if (credentials.password.length < 10) {
      passwordError = "Password length must be above 10 or more characters";
    }
    if (credentials.password !== credentials.correctPassword) {
      correctPasswordError = "Password does not match";
    }

    setError({
      email: emailError,
      password: passwordError,
      correctPassword: correctPasswordError,
    });

    if (emailError || passwordError || correctPasswordError) return false;

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidated()) {
      console.log(credentials);
    }
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 hidden xl:block 2xl:block bg-lightWhite m-auto w-full h-screen p-5">
        <h1 className="text-6xl font-rule mt-10 mb-2">
          Hello Buddy <span className="text-secondary">❤</span>
        </h1>
        <p className="text-2xl font-content mb-10 text-primary">
          Makes you happier and discipline person
        </p>
        <img
          src={image}
          alt="rulesbook signup illustration"
          className="col-span-2"
        />
      </div>
      <div className=" col-span-5 xl:col-span-3 w-4/5 mt-10 h-screen m-auto">
        <h2 className="text-6xl font-rule">Sign Up</h2>
        <p className="text-xl font-content font-semibold text-gray-500">
          Already member ?{" "}
          <Link to="/sign-in" className="text-tertiary underline">
            Login
          </Link>
        </p>
        <form className="my-10" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            error={error?.email}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            error={error?.password}
          />
          <Input
            type="password"
            placeholder="Re-type Password"
            name="correctPassword"
            value={credentials.correctPassword}
            onChange={handleChange}
            required
            error={error?.correctPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
