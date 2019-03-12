import React, { Component } from 'react';
import classes from './Owner.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../UI/Button/Button';
import pencil from '../../../assets/pencil.svg'
import error from '../../../assets/error.svg'
class Owner extends Component {
    state = {
        data:{
            name: this.props.ownerDetails.name,
            address: this.props.ownerDetails.address,
            email: this.props.ownerDetails.email,
            contact: this.props.ownerDetails.contact,
        }
        ,
        edit:this.props.edit
    }

    onChangeHandler = name => event => {
        this.setState({
            data:{
                ...this.state.data,
            [name]: event.target.value

            }
        })
    }

    editable=()=>{
        let edit=this.state.edit;
        this.setState({
            edit:!edit
        })
    }
    
    render() {
        return (<fieldset className={classes.Owner}>
            <legend style={{color:'blueviolet'}}>Owner Details #{this.props.i+1}</legend>
            
                { this.state.edit?
                    <img className={classes.editIcon} src={error} alt="close" onClick={this.editable}/>:
                <img className={classes.editIcon} src={pencil} alt="edit" onClick={this.editable}/>}
            
            <div className={classes.Owner}>
                <TextField
                    variant="outlined"
                    value={this.state.data.name}
                    label="Name"
                    className={classes.textField}
                    InputProps={{
                        readOnly: !this.state.edit
                    }}
                    readOnly={this.state.edit}
                    onChange={this.onChangeHandler("name")}
                />
                <TextField
                    variant="outlined"
                    value={this.state.data.address}
                    className={classes.textField}
                    label="Addres"
                    InputProps={{
                        readOnly: !this.state.edit
                    }}
                    onChange={this.onChangeHandler("address")}
                />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.data.email}
                    label="Email"
                    InputProps={{
                        readOnly: !this.state.edit
                    }}
                    onChange={this.onChangeHandler("email")}
                />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.data.contact}
                    label="Contact"
                    InputProps={{
                        readOnly: !this.state.edit
                    }}
                    onChange={this.onChangeHandler("contact")}
                />
            </div>
                {this.state.edit ?
                    <Button type="Ok" click ={()=>{this.props.changeHandler(this.state.data,this.props.i)}}name="Change" style={{margin:'0',marginLeft:'30px',width:'90%'}}/> : null}

        </fieldset>
        )
    }
}
export default Owner