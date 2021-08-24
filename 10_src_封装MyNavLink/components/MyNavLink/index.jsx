import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

export default class index extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {/* ...this.props对象解构给路由添加属性  NavLink 默认高亮的样式class名为active */}
                <NavLink {...this.props}></NavLink> 
            </div>
        )
    }
}
