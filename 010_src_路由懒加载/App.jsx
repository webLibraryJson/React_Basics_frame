import React, { Component,lazy,Suspense } from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
// import About from './components/About'
// import Home from './components/Home'
const About = lazy(() =>import('./components/About'))
const Home = lazy(() =>import('./components/Home'))
export default class App extends Component {
    render() {
        return (
            <div>
                <p><NavLink to='/about'>about</NavLink></p>
                <p><NavLink to='/home'>home</NavLink></p>
                <Suspense fallback={<h1>loding......</h1>}>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                    <Redirect to='/home'/>
                </Suspense>
            </div>
        )
    }
}
