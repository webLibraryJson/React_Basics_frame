import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' //给所有的容器组件传递store不用一个一个写了
import store from './redux/store'

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));

// store.subscribe(() =>{
//     ReactDOM.render(
//         <App/>
//     ,document.getElementById('root'));
// })