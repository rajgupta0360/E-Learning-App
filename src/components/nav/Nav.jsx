import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            // src="https://files.codingninjas.in/pl-ninja-16706.svg"
            src="https://cdn.pixabay.com/photo/2013/07/12/19/23/refresh-154688_1280.png"
            alt="logo"
          />
          <h4>Code With Ease</h4>
        </div>
        <div className={style.nav_details}>
          <button>Courses</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
