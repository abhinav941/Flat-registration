import React from 'react';
import classes from './Sidebar.css'
import {NavLink} from 'react-router-dom'
import close from '../../assets/close.svg'

const sidebar =(props)=>{
    let sideClass = [classes.sidebar]
        if(props.show){
            sideClass.push(classes.Open)
        }
        else{
            sideClass.push(classes.Close)
        }
        
        
        return (
            

            <div className={sideClass.join(' ')} >
                <div className={classes.icon} onClick={props.onClickHandler}>
                        <img src={close} alt="toggle" style={{
                            width: "20px", height: "20px",color:'white',position:'absolute',top:'10px',right:'10px'
                        }} />
                </div>
                <div className={classes.adminName}>
                </div>
                <div className={classes.name}>{props.name}</div>
                <hr></hr>
                <ul>
                    {
                        props.links.map(l=>{
                            return<>
                            <li> 
                            <div className={classes.animate}></div>
                                
                                <NavLink to={'/'+l} 
                                activeStyle={{
                                    
                                }}
                                >{l}</NavLink>
                            </li>
                            </>
                        })
                    }
                </ul>
            </div>
        )
    }


export default sidebar