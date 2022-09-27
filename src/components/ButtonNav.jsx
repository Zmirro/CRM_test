import { React, useState } from "react";
import "../scss/ButtonNav.scss";
import local from "../assets/local.js";
import { NavLink } from 'react-router-dom';
const ButtonNav = () => {
  const [btnState, setBtnState] = useState(false);

  const svg = local[0].svg.map((unit) => unit);
  const to = local[0].to.map((unit)=>unit);

  let togleClassCheck = btnState ? " active" : ' common';

  return (
    <div className="container">
      {local[0].buttons.map((name, index) => (
        <NavLink className={`btn${togleClassCheck}`} to={to[index]}>
          {svg[index]}
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default ButtonNav;
