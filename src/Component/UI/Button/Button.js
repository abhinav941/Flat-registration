import React from 'react'
import classes from './Button.css'
const Button = (props) => {
    return (
        <>
            <button className={[classes.Button,classes[props.type]].join(" ")} onClick={props.click}>
                {props.name}
            </button>
        </>

    )
}

export default Button