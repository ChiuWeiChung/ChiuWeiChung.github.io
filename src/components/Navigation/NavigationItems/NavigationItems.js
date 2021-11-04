import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.LinkList}>
            <li className={classes.sweep}>
                <NavLink to="/portfolio">作品集</NavLink>
            </li>
            <li className={classes.sweep}>
                <NavLink to="/aboutme">關於我</NavLink>
            </li>
        </ul>


    )
}

export default navigationItems