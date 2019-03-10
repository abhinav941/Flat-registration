import React from 'react';
import classes from './Header.css'
import {NavLink} from 'react-router-dom'
// import { prependOnceListener } from 'cluster';
// import MenuButton from '../UI/MenuButton/MenuButton';
const header = (props)=>{
    
    return (
        <div className={classes.header}>
            <span style={{display:'inline-block',padding:'20px',marginLeft:props.show? '7px': '40px',}}>LOGO</span>
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