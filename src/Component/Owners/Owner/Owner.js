import React, { Component } from 'react';
import classes from './Owner.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../UI/Button/Button';
class Owner extends Component {
    state = {
        name: this.props.ownerDetails.name,
        address: this.props.ownerDetails.address,
        email: this.props.ownerDetails.email,
        contact: this.props.ownerDetails.contact,
    }

    onChangeHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }
    render() {
        return (<fieldset className={classes.Owner}>
            <legend style={{color:'blueviolet'}}>Owner Details #{this.props.i+1}</legend>
            <div className={classes.Owner}>
                <TextField
                    variant="outlined"
                    value={this.state.name}
                    label="Name"
                    className={classes.textField}
                    InputProps={{
                        readOnly: !this.props.edit
                    }}
                    readOnly={this.state.edit}
                    onChange={this.onChangeHandler("name")}
                />
                <TextField
                    variant="outlined"
                    value={this.state.address}
                    className={classes.textField}
                    label="Addres"
                    InputProps={{
                        readOnly: !this.props.edit
                    }}
                    onChange={this.onChangeHandler("address")}
                />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.email}
                    label="Email"
                    InputProps={{
                        readOnly: !this.props.edit
                    }}
                    onChange={this.onChangeHandler("email")}
                />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.contact}
                    label="Contact"
                    InputProps={{
                        readOnly: !this.props.edit
                    }}
                    onChange={this.onChangeHandler("contact")}
                />
            </div>
                {this.props.edit ?
                    <Button type="Ok" name="Change" style={{margin:'0',marginLeft:'30px',width:'90%'}}/> : null}

        </fieldset>
        )
    }
}
export default Owner