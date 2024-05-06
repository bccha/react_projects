import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const changeUser = (prop, value) => {
    let newUser = {
      ...user,
      [prop]: value,
    };
    setUser(newUser);
  };

  const eventHandler = (e) => {
    changeUser(e.target.name, e.target.value);
  };

  return (
    <div>
      <div>
        <input
          placeholder={"이름"}
          onChange={eventHandler}
          value={user.name}
          name="name"
        />
      </div>
      <div>
        <input
          type="date"
          value={user.birth}
          onChange={eventHandler}
          name="birth"
        />
      </div>
      <div>
        {user.birth} {user.country}
      </div>
      <div>
        <select value={user.country} onChange={eventHandler}>
          <option value="0"></option>
          <option value="1">Korea</option>
          <option value="2">UK</option>
          <option value="3">US</option>
        </select>
      </div>
      <div>
        <textarea value={user.bio} onChange={eventHandler} name="bio" />
        {user.bio}
      </div>
    </div>
  );
};

export default Register;
