import Logo from "../Logo";
import S from "../../css/Register.module.css";
import { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState(false);

  const nameInput = (
    <>
      <label htmlFor="#name">Name</label>
      <input id="name" type="name" />
    </>
  );

  return (
    <div className={`${S.register} register`}>
      <div className={S.container}>
        <Logo />
        <div className={S.title}>Login</div>
        <form>
          {register ? nameInput : ""}
          <label htmlFor="#email">Email</label>
          <input id="email" type="email" />
          <label htmlFor="#password">Password</label>
          <input id="password" type="text" />
          <button type="submit">Submit</button>
          <button type="button">Demo App</button>
        </form>
        <p>
          {register ? "Already a member" : "Not a member yet"}
          <span onClick={() => setRegister(!register)}>
            {register ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
