import React, { Component } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import classes from './Layout.css'
// import rightArrow from '../../assets/right-arrow.svg'
import Header from '../../Component/Header/Header'
import MenuButton from '../../Component/UI/MenuButton/MenuButton';
import {Route,Switch} from 'react-router-dom'
import Home from '../../Component/Pages/Home/Home';
import About from '../../Component/Pages/About/About';
import Contact from '../../Component/Pages/Contact/Contact';
import Register from '../Register/Register';
import Signin from '../SignIN/Signin'
class Layout extends Component {
    state = {
        links: [
            'home', 'contact', 'about'
        ],
        show: false


    }
    onClickHandler = () => {
        const show = this.state.show
        this.setState({
            show: !show
        })
    }
    render() {
        let classPage = [classes.SidebarThere,classes.Layout]
        if(this.state.show){
            classPage.push(classes.Open)
        }
        else{
            classPage.push(classes.Close)
        }
        return (
            <>
                <Sidebar name="Abhinav" links={this.state.links} show={this.state.show} onClickHandler={this.onClickHandler}/>
                <div className={classPage.join(" ")}>
                    <Header show={this.state.show}/>
                    <div className={classes.icon} onClick={this.onClickHandler}>
                        {
                            this.state.show?
                            null:
                            <MenuButton />
                        }
                    </div>
                    
                    
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/signin' component = {Signin}/> 
                    <Route path='/register' component={Register}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
                </div>
            </>
        );
    }
}

export default Layout
