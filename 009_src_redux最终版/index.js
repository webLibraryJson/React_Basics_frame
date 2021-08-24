import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' //给所有的容器组件传递store不用一个一个写了
import store from './redux/store'
import App from './App'

ReactDOM.render(
    /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));
