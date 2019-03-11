import React,{Component} from 'react'
import Modal from '../../Component/UI/Modal/Modal';
import classes from './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../Component/UI/Button/Button';
class Signin extends Component{
    state={
        show:true,
        uname:'',
        password:''
    }

    componentDidMount(){
        console.log(this.props)
    }
    changeHandler =name=>event =>{
        this.setState({
            [name]:event.target.value
        })
    }

    cancelClicked=()=>{
        this.props.history.goBack();
    }
    signInClicked=()=>{
        if(this.state.uname !=='' && this.state.password !== ""){
            this.props.history.replace('/home');
        }
        console.log(this.state)
    }

    render(){
        return(
            <Modal show={this.state.show} locate="">
            <div className={classes.header}>
                SIGN IN
            </div>
                <form className={classes.Signin} onSubmit={this.signInClicked}>
                     <TextField
                     required
                     id="outlined-required"
                     label="Username"
                     margin="normal"
                     variant="outlined"
                     onChange={this.changeHandler("uname")}
                     autoComplete="username"
                     style={{width:'90%',margin:'20px 20px 10px 20px'}}
                     />
                     <br></br>
                     <TextField
                     required
                     id="outlined-name"
                     type="password"
                     label="Password"
                     margin="normal"
                     variant="outlined"
                     autoComplete="current-password"
                     onChange={this.changeHandler("password")}
                     style={{width:'90%',margin:'20px 20px 10px 20px'}}
                     />
                     <br></br>
                     <Button type="Ok" name="Sign In" />
                     <Button type="Cancel" name="Cancel" click={this.cancelClicked} />
                     {/* <Button type="Ok" name="Sign In"/>
                     <Button type="Cancel" name="Cancel"/> */}
                </form>
            </Modal>
        )
    }
}
export default Signin