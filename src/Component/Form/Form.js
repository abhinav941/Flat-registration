import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './Form.css'
import  Button  from '../UI/Button/Button';
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
                <TextField
                    variant="outlined"
                    label="name"
                    onChange={this.onChangeHandler("name")}
                    required
                    value={this.state.name}
                    className={classes.textField}
                    
                />

                <TextField
                    variant="outlined"
                    value={this.state.address}
                    label="address"
                    onChange={this.onChangeHandler("address")}
                    className={classes.textField}
                    required
                />

                <TextField
                    value={this.state.contact}
                    variant="outlined"
                    label="contact"
                    onChange={this.onChangeHandler("contact")}
                    className={classes.textField}
                    required
                />

                <TextField
                    value={this.state.email}
                    variant="outlined"
                    label="email"
                    onChange={this.onChangeHandler("email")}
                    required
                    className={classes.textField}
                    type="email"
                />
                <Button type="Ok" name="Add"/>
                <Button type="Cancel" name="Cancel"/>
            </div>

        )
    }
}

export default Form