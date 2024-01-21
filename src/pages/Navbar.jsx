import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Registration from "./Registration";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>B</span>logging
            <span>W</span>ebsite
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
            <Link  to={"/"}>Home</Link>
   
            </li>
            <li>
            <Link  to={"/about"}>About</Link>
   
            </li>
            <li>
              <Link  to={"/contact"}>Contact</Link>
            </li>
            <li>
            <Link  to={"/services"}>Services</Link>
            </li>
          </ul>
        </div>
        {/* <div className="social-media">
          <ul>
            <li>
              <a href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div> */}

        <div className="d-flex">
          <Link  to={"/login"}>Login</Link>
          {/* <button className="button" onClick={Registration}>
            Login
          </button> */}
          <Link to={"/register"}>Signup</Link>
          {/* <button className="button" onClick={() => Navigate("/Registration")}>
            Signup
          </button> */}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
