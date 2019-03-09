import React,{Component} from 'react'
import Modal from '../../Component/UI/Modal/Modal'
class Register extends Component{

    state={
        show:true
    }

    closeHandler=()=>{
        const display = this.state.show;
        this.setState({
            show:!display
        })
        console.log('clicked')
    }
    click=()=>{
        console.log('clikc')
    }

    render(){

        return(
            <div>
                <Modal show={this.state.show} clicked={this.closeHandler}> 
                    <div >
                        This is Registration page
                     </div>   
                </Modal>
            </div>
        )
    }
    
}

export default Register