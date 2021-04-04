import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://image.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg'
                 alt='My logo'/>
        </header>
    )
};

export default Header;