import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './Form.css'
class Form extends Component {
    state={
        name:'',
        address:'',
        email:'',
        contact:''
    }
    onChangeHandler=name=>event=>{
        this.setState({
            [name]:event.target.value
        })
    }
    render() {
        return (
            <div className={classes.Form}>
            <label htmlFor="name">Name</label>
                <TextField
                    variant="outlined"
                    label="name"
                    onChange={this.onChangeHandler("name")}
                    required
                    style={{
                        width:'200px',
                        margin:'50px'
                    }}
                />
            <label htmlFor="address">Address</label>

                <TextField

                    variant="outlined"
                    label="address"
                    onChange={this.onChangeHandler("address")}
                    required
                />
            <label htmlFor="name">Name</label>

                <TextField
                    variant="outlined"
                    label="contact"
                    onChange={this.onChangeHandler("contact")}
                    required
                />
                <TextField
                    variant="outlined"
                    label="email"
                    onChange={this.onChangeHandler("email")}
                    required
                    type="email"
                />
            </div>

        )
    }
}

export default Form