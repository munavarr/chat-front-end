import React from "react";
// import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { SignInUser } from "./features/authSlice";
import { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const token = localStorage.getItem("token")

  const data = {
    username: username,
    password: password,
  };

  const LoginHandle = (e) => {
    e.preventDefault();
    dispatch(SignInUser(data));
  };
  return (
    <div>
      <div className="Login">
        <div>{isloggedin}</div>
        <img
          className="olx"
          src={require("../src/assets/olx.jpg")}
          height="130px"
          width="auto"
        ></img>
        <form onSubmit={LoginHandle}>
          <input
            className="input"
            type="text"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="submit" type="submit">
            Sign in
          </button>
        </form>
        <Link className="register" to={"/"}>
          Sign Up
        </Link>
        <Link className="fgt">forgot password ?</Link>
        {token && navigate("/Home")}
      </div>
    </div>
  );
};

export default Login;
