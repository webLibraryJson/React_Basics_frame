import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,HashRouter} from 'react-router-dom'

import App from './App'

ReactDOM.render(
    //应用到路由，在App根组件外层用路由包裹
    <HashRouter>  
        <App/>
    </HashRouter>
,document.getElementById('root'));