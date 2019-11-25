import React from 'react';
import  s from './Navbar.module.css'


// const s = {
//     'nav':'Navbar_nav__3DM4X',
//     'item':'Navbar_item__299FJ'
// }

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a> Settings </a>
            </div>
        </nav>
    )
};

export default Navbar;