import React from 'react';
import logo from '../assets/investment-calculator-logo.png';
import styled from '../assets/css/Header.module.css';
const Header = () => {
    return (
        <header className={`${styled.header}`}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
};
export default Header;