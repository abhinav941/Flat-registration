import React from 'react';
import classes from './Header.css'
import {NavLink} from 'react-router-dom'
const header = ()=>{
    
    return (
        <div className={classes.header}>
            LOGO
            <div className={classes.link}>
                <NavLink to='/signin' 
                activeClassName={classes.active}>Sign in</NavLink>
                <NavLink to='/register'
                activeClassName={classes.active}>Register</NavLink>
            </div>
        </div>
    );

}

export default header