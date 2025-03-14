import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function Nav() {
  let flag = false;
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to='/'>
              <img
                className={style.logo}
                // src="https://files.codingninjas.in/pl-ninja-16706.svg"
                src="https://cdn.pixabay.com/photo/2013/07/12/19/23/refresh-154688_1280.png"
                alt="logo"
              />
            </Link>
            <h4>Code With Ease</h4>
          </div>
          <div className={style.nav_details}>
            <button><NavLink to="/courses" style={{textDecoration: "none"}}>{({isActive})=>( isActive? "On Courses" : "Go To Courses")}</NavLink></button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
