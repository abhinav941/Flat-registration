import React from 'react';
import {Redirect} from 'react-router-dom'
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.click} style={{
        transform: props.sidebar? 'translateX(-200px)' : 'translate(0px)' ,
    }}></div> : <Redirect from='/register' to="/"/>
);

export default backdrop;
