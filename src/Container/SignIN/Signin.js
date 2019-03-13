import React,{Component} from 'react'
import Modal from '../../Component/UI/Modal/Modal';
import classes from './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '../../Component/UI/Button/Button';
class Signin extends Component{
    state={
        show:true,
        uname:'',
        password:'',
        error:false
    }

    changeHandler =name=>event =>{
        this.setState({
            [name]:event.target.value
        })
    }

    cancelClicked=()=>{
        this.props.history.replace('/dashboard');
    }
    signInClicked=()=>{
        if(this.state.uname !=='' && this.state.password !== ""){
            if(this.state.uname === this.state.password){
                this.setState({
                    error:false
                })
                // this.props.history.replace('/');
            }else{
                this.setState({error:true})
            }
        }
        else{
            this.setState({
                error:true
            })
        }
    }

    render(){
        return(
            <Modal show={this.state.show} locate="">
            <div className={classes.header}>
                SIGN IN
            </div>
                <div className={classes.Signin} >
                    <span className={classes.error} style={{display:this.state.error?'block':'none',color:'red'}}>Either Username or password  is wrong</span>
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
                     <Button type="Ok" name="Sign In" click={this.signInClicked}/>
                     <Button type="Cancel" name="Cancel" click={this.cancelClicked} />
                     {/* <Button type="Ok" name="Sign In"/>
                     <Button type="Cancel" name="Cancel"/> */}
                </div>
            </Modal>
        )
    }
}
export default Signin