import React, { useState } from "react";
import { Link } from "react-router-dom";
import gif from "../assets/signin.gif";
import Button from "../components/Button.component";
import Input from "../components/Input.component";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const isValidated = () => {
    let emailError, passwordError;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(credentials.email)) {
      emailError = "Please enter valid email address";
    }
    if (credentials.password.length < 10) {
      passwordError = "Password length must be above 10 or more characters";
    }

    setError({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) return false;

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidated()) {
      console.log(credentials);
      alert(credentials.email, credentials.password);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <img
        src={gif}
        alt="welcome gif"
        className="bg-primary col-span-2 hidden xl:block 2xl:block image h-screen object-cover"
      />
      <div className="col-span-5 xl:col-span-3 p-10 xs:p-5 sm:p-10 flex flex-col justify-center ">
        <h1 className="text-6xl font-rule mb-3">Login ✌</h1>
        <p className="text-xl font-content font-semibold text-gray-500 ">
          Welcome back to RulesBook
        </p>
        <form onSubmit={handleSubmit} className="my-3 ">
          <Input
            type="email"
            name="email"
            value={credentials.email}
            changeHandler={handleChange}
            placeholder="Email Address"
            required
            error={error?.email}
          />
          <Input
            type="password"
            name="password"
            value={credentials.password}
            changeHandler={handleChange}
            placeholder="Password"
            required
            error={error?.password}
          />
          <Link to="/forgot-password">
            <p className="text-right text-underline underline text-tertiary mb-2 font-content text-md font-semibold">
              Forgot Password?
            </p>
          </Link>
          <Button>Sign In</Button>
          <p className="text-center text-md font-content font-semibold">
            Create a new Account?{" "}
            <Link to="/sign-up" className="text-tertiary underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
