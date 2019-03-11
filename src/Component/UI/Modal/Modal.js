import React, { Component } from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import {withRouter} from 'react-router-dom'
// import Backdrop from '@material-ui/core/Backdrop'
class Modal extends Component {
    state={
        show:this.props.show
    }
    
    closeHandler=()=>{
        const display = this.state.show;
        this.setState({
            show:!display
        })
        console.log('clicked')

    }
    render() {
        return (
            <>
                <Backdrop show={this.state.show} click={this.closeHandler} navigate={this.props.locate}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.state.show ? 'translateY(0)' : 'translateY(-100vw)',
                        opacity: this.state.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        )
    }
}


export default withRouter(Modal)