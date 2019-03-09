import React, { Component } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import classes from './Layout.css'
import rightArrow from '../../assets/right-arrow.svg'
import Header from '../../Component/Header/Header'

class Layout extends Component {
    state = {
        links: [
            'home', 'contact', 'about'
        ],
        show: true


    }
    onClickHandler = () => {
        const show = this.state.show
        this.setState({
            show: !show
        })
    }
    render() {
        return (
            <>

                <Sidebar name="Abhinav" links={this.state.links} show={this.state.show} onClickHandler={this.onClickHandler}/>
                <div className={this.state.show ? classes.SidebarThere : null}>
                    <Header />
                    <div className={classes.icon} onClick={this.onClickHandler}>
                        {
                            this.state.show?
                            null:
                            <img src={rightArrow} alt="toggle" style={{
                                width: "20px", height: "20px"
                            }} />
                        }
                        
                    </div>
                    <div>page</div>
                </div>

            </>
        );
    }
}

export default Layout
