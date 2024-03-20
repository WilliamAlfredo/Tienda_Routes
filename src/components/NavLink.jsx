import React from "react";
import {
  NavLink as NL,
} from "react-router-dom";

//componente para encapsular todo los de navlink
const NavLink = ({ to, children, ...props }) => {
    return (
      <NL
        {...props}
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
        to={to}
      >
        {children}
      </NL>
    );
  };
export default  NavLink;