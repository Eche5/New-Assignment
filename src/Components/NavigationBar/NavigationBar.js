import React from "react";
import img from "../Assets/Logo.png";
import classes from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <nav className={classes.navigation}>
      <Link to="/">
        <img src={img} />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="./history">01.HISTORY</Link>
          </li>
          <li>
            <Link to="/team">02.TEAM</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
