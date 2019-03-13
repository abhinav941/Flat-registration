import React from 'react';
import classes from './Backdrop.css';
import {Redirect} from 'react-router-dom'
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.click} style={{
        transform: props.sidebar? 'translateX(-200px)' : 'translate(0px)' ,
    }}></div> : <Redirect to='/dashboard'/>
);

export default backdrop;
