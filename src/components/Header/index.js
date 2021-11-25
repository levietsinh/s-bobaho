import React from "react";
import { BrowserRouter, Link } from 'react-router-dom'
const Header = () => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL}>Home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/sign-in'}>Đăng nhập</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/welcome'}>Landing Page</Link>
        </li>
      </ul>
    // </BrowserRouter>
  )
}
export default Header;