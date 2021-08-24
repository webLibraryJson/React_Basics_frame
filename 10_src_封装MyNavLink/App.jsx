import React, { Component } from 'react'
//引入路由
import {Link,Route,NavLink,BrowserRouter,HashRouter} from 'react-router-dom'  //BrowserRouter,HashRouter一个是hash模式、一个是history模式


import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'  //封装的路由

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <button>about</button>
                <button>home</button> */}
                {/* <Link to='/about'>about</Link>
                <Link to='/home'>home</Link> */}
                <MyNavLink to='/about'>about</MyNavLink>
                <MyNavLink to='/home'>home</MyNavLink>
                <div style={{width:'300px',height:'500px',border:'1px solid #ccc'}}>
                    {/* <About/>
                    <Home/> */}
                    <Route path='/home' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                </div>
            </div>
        )
    }
}
