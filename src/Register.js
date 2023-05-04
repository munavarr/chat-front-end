import React, { useState } from "react";
// import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpUser } from "./features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const issignup = useSelector(state=>state.auth.role)
  const navigate = useNavigate()

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [number, setnumber] = useState();

  const userdata = {
    username: username,
    password: password,
    confirmPassword: confirmpassword,
    name: name,
    mobileNo: number,
    email: email,
  };

  const RegisterHandle = (e) => {
    e.preventDefault();
    dispatch(SignUpUser(userdata));
    console.log(userdata);
  };

  return (
    <div className="REG">
      <div className="Register">
       <img className="olx" src={require("../src/assets/olx.jpg")} height="130px" width="auto"></img>
        {/* <p className="label" htmlFor="">
        name
      </p> */}
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />
        {/* <p className="label" htmlFor="">
        name
      </p> */}
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        {/* <p className="label" htmlFor="">
        email
      </p> */}
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        {/* <p className="label" htmlFor="">
        password
      </p> */}
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        {/* <p className="label">confirmpassword</p> */}
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        {/* <p className="label">number</p> */}
        <input
          className="input"
          name="password"
          type="number"
          placeholder="Number"
          onChange={(e) => setnumber(e.target.value)}
        />
        <button className="submit" onClick={RegisterHandle}>
          Sign up
        </button>

        <Link className="login" to={"/Login"}>Sign in</Link>
        {issignup && navigate("/Login") }
      </div>
    </div>
  );
};

export default Register;
