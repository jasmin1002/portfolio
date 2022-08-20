import { React, useState } from "react";
import { authenticate, useAuthContext } from "../utils/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {FaNapster} from 'react-icons/fa'
import "../Login.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {logIn} = useAuthContext();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const {isAuthenticated, member} = authenticate(user);
    if (isAuthenticated) {
      // Do something...
      console.log("Yessss authenticated!")
      logIn(member);
      navigate('/dashboard');
    }
  }

  return (
    <section className="backdrop">
      <div className="login">
        <aside>
          <FaNapster className="icon-logo"/>
          <h1>OnlinePresenz</h1>
          <p>
            Monetize your online presence.
          </p>
          <p className="signup">
            New here? <NavLink to='signup'>Sign Up</NavLink>
          </p>
        </aside>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="login-heading">Login</h1>
          <div className="form-vgroup">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="input"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="johndoe@dev.com"
            />
          </div>
          <div className="form-vgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <p className="forgetpassword">
              <NavLink to=".">Forget Password?</NavLink>
            </p>
          </div>
          <div className="form-vgroup">
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}
