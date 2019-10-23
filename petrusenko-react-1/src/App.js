import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SadebarContainer from "./components/Navbar/Sadebar/SadebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <div className='Menu'>
                        <Navbar/>
                        <SadebarContainer/>
                    </div>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                    </div>
                </div>
            </BrowserRouter>)

    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export  default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
