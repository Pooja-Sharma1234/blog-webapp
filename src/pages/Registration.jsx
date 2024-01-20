import React, { useState } from "react";
import { Storage } from "../services/Storage";
const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const clearUserStorage = () => {
    Storage.clearUser();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
    };

    //yeah line user ko get karegi localstroge se
    //haan ab sara sahi hogaya ab app kr saktin hain acha
    const users = Storage.getUser();
    if (users === null) {
      Storage.setUser([newRecord]);
    } else {
      //yeah line userko add karegi localstroge main
      Storage.setUser([...users, newRecord]);
    }

    setUserRegistration({
      username: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  //iska login smajh aya apko ha dekho filter use kiya hain apka fvrt
  //Storage.getUser() yeah array dega na tabhi toh filter lagega na

  const login = () => {
    const email = "pooja@gmail.com";
    const password = "Qwerty@123";
    const findUser = Storage.getUser().filter((user) => user.email === email);
    if (findUser.length === 0) {
      alert("User does't exist");
    } else {
      alert("User exist");
    }
  };

  // console.log(Storage.getUser(), "users");

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <section>
          <div>
            <h2>Registration</h2>
          </div>
          <div className="login-items">
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                autoComplete="off"
                value={userRegistration.username}
                onChange={handleInput}
                name="username"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
                name="email"
                id="Email"
              ></input>
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}
                name="password"
                id="Password"
              ></input>
            </div>
            <div>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                autoComplete="off"
                value={userRegistration.cpassword}
                onChange={handleInput}
                name="cpassword"
                id="cpassword"
              ></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </section>
      </form>
      <p onClick={login} type="button">
        Login
      </p>
    </>
  );
};
export default Registration;
