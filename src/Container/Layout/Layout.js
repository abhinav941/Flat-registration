import React, { Component } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import classes from './Layout.css'
// import rightArrow from '../../assets/right-arrow.svg'
import Header from '../../Component/Header/Header'
import MenuButton from '../../Component/UI/MenuButton/MenuButton';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '../../Component/Pages/Home/Home';
import Dashboard from '../../Component/Pages/Dashboard/Dashboard'
import About from '../../Component/Pages/About/About';
import Register from '../Register/Register';
import Signin from '../SignIN/Signin'
class Layout extends Component {
    state = {
        links: [
            'DASHBOARD','FLAT OWNER REGISTRATION', 'FLAT MASTER REGISTRATION'
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
                    <Route path='/FLAT OWNER REGISTRATION' component={Home}/>
                    <Route path='/FLAT MASTER REGISTRATION' component={About}/>
                    <Route path='/signin' component = {Signin}/> 
                    <Route path='/register' component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Redirect path='/' to="/FLAT OWNER REGISTRATION"/>
                </Switch>
                </div>
            </>
        );
    }
}

export default Layout
