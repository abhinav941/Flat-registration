import React, { Component } from 'react'
import Modal from '../../Component/UI/Modal/Modal'
import TextField from '@material-ui/core/TextField'
import classes from './Register.css'
import Button from '../../Component/UI/Button/Button';
class Register extends Component {
    state={
        first:'',
        last:'',
        email:'',
        pwd:'',
        uname:'',
        cpwd:''       
    }
    onChangeHandler=name=>event=>{
        this.setState({
            [name]:event.target.value
        })
    }

    cancelHandler=()=>{
        this.props.history.goBack();
    }
    confirmHandler=()=>{
        console.log(this.state)
        this.props.history.replace('/signin')
    }
    render() {
        
        return (
            <div>

                <Modal show locate="">
                    <div className={classes.header}>
                        REGISTER
                    </div>
                    <form>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            required
                            onChange={this.onChangeHandler('first')}
                            style={{
                                width: '90%', margin: '10px 20px 5px 20px'
                            }} />
                        <TextField
                            label="Last Name"
                            onChange={this.onChangeHandler('last')}
                            variant="outlined"
                            style={{
                                width: '90%', margin: '5px 20px 5px 20px'
                            }} />
                        <TextField
                            label="Email"
                            variant="outlined"
                            onChange={this.onChangeHandler('email')}
                            type="email"
                            required
                            style={{
                                width: '90%', margin: '5px 20px 5px 20px'
                            }} />
                        <TextField
                            label="User Name"
                            variant="outlined"
                            onChange={this.onChangeHandler('uname')}
                            autoComplete="username"
                            required
                            style={{
                                width: '90%', margin: '5px 20px 5px 20px'
                            }} />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange={this.onChangeHandler('pwd')}
                            autoComplete="current-password"
                            required
                            style={{
                                width: '90%', margin: '5px 20px 5px 20px'
                            }} />
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            onChange={this.onChangeHandler('cpwd')}
                            autoComplete="current-password"
                            required
                            style={{
                                width: '90%', margin: '5px 20px 5px 20px'
                            }} />
                        <Button type="Ok" name="Register" click={this.confirmHandler}/>
                        <Button type="Cancel" name="Cancel"click={this.cancelHandler}/>
                    </form>

                </Modal>


            </div>
        )
    }

}

export default Register