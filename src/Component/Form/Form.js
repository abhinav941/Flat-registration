import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './Form.css'
import Button from '../UI/Button/Button';
class Form extends Component {
    state = {
        data: {
            name: '',
            address: '',
            email: '',
            contact: ''
        }

    }
    onChangeHandler = name => event => {
        this.setState({
            data:{
                ...this.state.data,
                [name]: event.target.value
            }
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
                    value={this.state.data.name}
                    className={classes.textField}

                />

                <TextField
                    variant="outlined"
                    value={this.state.data.address}
                    label="address"
                    onChange={this.onChangeHandler("address")}
                    className={classes.textField}
                    required
                />

                <TextField
                    value={this.state.data.contact}
                    variant="outlined"
                    label="contact"
                    onChange={this.onChangeHandler("contact")}
                    className={classes.textField}
                    required
                />

                <TextField
                    value={this.state.data.email}
                    variant="outlined"
                    label="email"
                    onChange={this.onChangeHandler("email")}
                    required
                    className={classes.textField}
                    type="email"
                />
                <Button type="Ok" name="Add" click={() => (this.props.click(this.state.data))} />
                <Button type="Cancel" name="Cancel" click={this.props.cancel}/>
            </div>

        )
    }
}

export default Form