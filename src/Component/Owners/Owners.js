import React, { Component } from 'react';
import classes from './Owners.css'
import Owner from './Owner/Owner'
class Owners extends Component {
    state = {
        editable: this.props.read
    }

    render() {
        


        return (
            <div className={classes.Owners}>
            {   this.props.owners.length!==0?
                this.props.owners.map((owner,index) => {
                return <div key={Math.random()} className={classes.Owner}>
                    <Owner ownerDetails={owner} edit={this.props.read} i={index}/>
                    {this.props.owners[owner]}
                </div>
            }):
            <span style={{
                width:'100%',fontSize:'40px',color:'blueviolet',margin:'50px',padding:'50px'
            }}>No Owners Yet....!!!</span>
        }

            </div>
        );
    }
}

export default Owners