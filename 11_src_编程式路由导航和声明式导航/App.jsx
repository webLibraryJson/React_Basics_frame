import React, { Component } from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className='Appbox'>
                <div className='titlebox'>
                    welcome to react
                </div>
                <div className='allbox'>
                    <div className='navbox'>
                        <NavLink to='/about'>about</NavLink>
                        <br/>
                        <NavLink to='/home'>home</NavLink>
                    </div>
                    <div className='comentbox'>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                        <Redirect to='/about' />
                    </div>
                </div>
            </div>
        )
    }
}
