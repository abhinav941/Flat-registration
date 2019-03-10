import React from 'react'
import Modal from '../../Component/UI/Modal/Modal';
import classes from './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../Component/UI/Button/Button';
const Signin = (props) =>{
    return(
        <Modal show sideOn={props.show}>
            <form className={classes.Signin}>
                <label for="outlined-required">Username:</label>
                 <TextField
                 required
                 id="outlined-required"
                 label="Username"
                 margin="normal"
                 variant="outlined"/>
                 <br></br>
                 <label for="outlined-name">Password:</label>
                 <TextField
                 required
                 id="outlined-name"
                 type="password"
                 label="Password"
                 margin="normal"
                 variant="outlined"/>
                 <Button type="Ok" name="Sign In" />
                 <Button type="Cancel" name="Cancel" />
                 {/* <Button type="Ok" name="Sign In"/>
                 <Button type="Cancel" name="Cancel"/> */}
            </form>
        </Modal>
    )
}

export default Signin