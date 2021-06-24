import React from 'react';
import './Header.css';
import logo from './logo.png';


const Header = ({...props}) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo"/>
      <p className='header__text'>
        {props.children}
      </p>
    </header>
  );
}

export default Header;