import React from "react";

import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import '../Navigation/navigation.styles.scss';

// importing logo as component
import { ReactComponent as Logo } from '../../assets/Logo/Logo.svg';

// Navigation bar is Parent element that renders on the page everytime even if the path changes
const Navigation = () =>{
    return (
        // Fragment is used to make a parent element which do nit mount anything at the dom
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Logo className="logo"></Logo>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'> 
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in'> 
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  };

export default Navigation;