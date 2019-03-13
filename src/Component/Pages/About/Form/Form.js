import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '../../../UI/Button/Button'
import classes from './Form.css'
class Form extends Component {
    state = {
        starts: 0,
        ends: 0,
        error:false
    }

    changeRangeHandler = name => event => {
        this.setState({
            [name]: parseInt(event.target.value)
        })
    }

    datachangeHandler=()=>{
        let data=[]
        if(this.state.starts<this.state.ends){
            for(let x=this.state.starts;x<this.state.ends+1;x++){
                data.push({no:x,vacany:true});
            }
            this.setState({
                error:false
        })
            this.props.click(this.props.index,data)
            console.log('changed')
        }
        else{
            this.setState({
                error:true
            })
        }

    }
    render() {
        return (
            <div className={classes.Data}>
                {this.state.error?<span className={classes.error}> the ending flat number should be greated than starting flat number </span>:<span className={classes.error} style={{backgroundColor:'blueviolet',color:'white',border:'0px',left:'-20px',marginTop:'10px',width:"100%"}}> Set The range of flat in this <b>{this.props.index===0?'Ground Floor': 'Floor '+this.props.index}</b></span>}
                <TextField
                    variant="outlined"
                    type="number"
                    value={this.state.starts}
                    label="Starts From"
                    onChange={this.changeRangeHandler("starts")}

                    style={{
                        width: '220px', height: '50px', textAlign: 'center',margin:'20px', marginTop: '70px', display: 'inline-block'
                    }} />
                <TextField
                    variant="outlined"
                    type="number"
                    value={this.state.ends}
                    label="Ends To"
                    onChange={this.changeRangeHandler("ends")}
                    style={{
                        width: '220px', height: '50px', textAlign: 'center', margin: '20px', display: 'inline-block'
                    }} />

                <Button type="Ok" name="Save" style={{ width: '220px', padding: '15px', margin: '20px' }} click={this.datachangeHandler} />
            </div>
        )
    }
}

export default Form