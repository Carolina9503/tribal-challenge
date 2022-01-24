import React from 'react';
import logo from '../../assets/img/tribal - logo.png';
import '../header/Header.css';
import chevron from '../../assets/icon/chevron.png';


export const Header = () => {
  return (
    <nav className="navbar navbar-white bg-white">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt=""/>
                <div className='logo-hb'>
                    <h2 className='logo-hb__text'>HB</h2>
                </div>
                <img className='p-2' src={chevron} alt=''/>
            </a>
        </div>
    </nav>
  );
};
