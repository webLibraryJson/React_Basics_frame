import React, { Component } from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import Message  from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavLink to='/home/news'>新闻</NavLink>
                &nbsp;
                <NavLink to='/home/message'>消息</NavLink>
                
                <Route path='/home/message' component={Message} />
                <Route path='/home/news' component={News}/>
                <Redirect to='/home/news'/>
            </div>
        )
    }
}
