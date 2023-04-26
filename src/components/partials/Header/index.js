import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "./../../../images/logo.png";
import Cart from "./../../../images/cart.png";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.pageYOffset > 0);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <header className={isScroll ? styles.headerScroll : styles.header}>
      <div className={styles.header__logo}>
        <Link to={process.env.PUBLIC_URL}>
          <img src={Logo} alt="S-Bobaho" />
        </Link>
      </div>
      <ul className={styles.header__nav}>
        <li>
          <Link to={process.env.PUBLIC_URL}>Vay tiền</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/sign-in"}>Mua hàng</Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + "/welcome"}
            className={styles.cart}
          >
            Giỏ hàng
            <img src={Cart} alt="Cart Icon" />
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/account"}>Tài khoản</Link>
        </li>
      </ul>
    </header>
    // </BrowserRouter>
  );
};
export default Header;
