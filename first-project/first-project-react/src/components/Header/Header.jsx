import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="http://cdn.onlinewebfonts.com/svg/img_398866.png"
        alt="logo"
      ></img>

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Log Out</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
