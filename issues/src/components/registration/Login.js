import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logUser } from "../redux/actions";

const Login = (props) => {

  const [ loginData, setLoginData ] = useState({
    email: "",
    password: "",
  });

//   const [ logErrors, setLogErrors ] = useState({
//     email: "",
//     password: "",
//   });

  const handleLogChanges = e => {
    const logCredentials = {
      ...loginData,
      [e.target.name]: e.target.value
    };
    setLoginData(logCredentials);
  };

  const loginSubmit = e => {
    e.preventDefault();
    props.logUser(loginData)
        setLoginData({
          email: "",
          password: "",
        });
  };

  return (
    <div className="loginForm">
        <form onSubmit={loginSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLogChanges}
            />
            {/* <br />
            {logErrors.username.length > 0 ? (
                <p className="error">{logErrors.email}</p>
            ) : null}
            <br /> */}
            <input
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={loginData.password}
                onChange={handleLogChanges}
            />
            {/* <br />
            {logErrors.password.length > 0 ? (
                <p className="error">{logErrors.password}</p>
            ) : null} */}
            <br />
            <button>Login</button>
        </form>
    </div>
  );
};

export default connect(null, { logUser })(Login);