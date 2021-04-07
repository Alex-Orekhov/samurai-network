import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={props.state.dialogsPage}/>} />
                    <Route path={'/profile'}
                           render={() => <Profile state={props.state.profilePage}/>} />
                </div>
            </div>
    );
}

export default App;
