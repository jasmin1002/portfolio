import { React, useState } from "react";
import { validateInputs, registerMember } from "../utils/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {FaNapster} from 'react-icons/fa'
import "../Login.css";

export default function Signup() {
  const [newMember, setNewMember] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setNewMember((prevNewMember) => ({
      ...prevNewMember,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateInputs(newMember);
    if (isValid) {
      // Navigate to the login page.
      registerMember(newMember);
      navigate('/')
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
            Already have account? <NavLink to='../'>Sign In</NavLink>
          </p>
        </aside>
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="signup-heading">Sign Up</h1>
          <div className="form-vgroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="input"
              id="username"
              name="username"
              value={newMember.username}
              onChange={handleChange}
              placeholder="Jasmine"
            />
          </div>
          <div className="form-vgroup">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="input"
              id="email"
              name="email"
              value={newMember.email}
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
              value={newMember.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-vgroup">
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}
