import React from 'react'
import classes from './Button.css'
const Button = (props) => {
    return (
        <>
            <button className={[classes.Button,classes[props.type]].join(" ")}>
                {props.name}
            </button>
        </>

    )
}

export default Button