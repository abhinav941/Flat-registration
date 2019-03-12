import React,{Component} from 'react'
import classes from './About.css'

class About extends Component{
    render(){
        return(
            <div className={classes.About}>
                <span style={{ display: 'block', padding: '10px', borderBottom: '2px solid blueviolet', color: 'blueviolet', textTransform: 'uppercase' }}>Flat Master Registration</span>
            
            </div>

        );
    }
}

export default About