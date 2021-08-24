import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class News extends Component {
    state = {
        navArr:[
            {id:'001',title:'体育'},
            {id:'002',title:'生活'},
            {id:'003',title:'奥运'}
        ]
    }
    render() {
        const {navArr} = this.state
        return (
            <div>
                {
                    navArr.map((item) =>{
                        return(
                            <div key={item.id}>
                                {/* params传递方式 */}
                                {/* <Link to={`/home/news/detail/${item.id}/${item.title}`} key={item.id}>{item.title}</Link> */}
                                {/* search传递方式 */}
                                <Link to={`/home/news/detail/?id=${item.id}&title=${item.title}`} key={item.id}>{item.title}</Link>
                                {/* state传递方式 */}
                                {/* <Link to={{pathname:'/home/news/detail',state:{id:item.id,title:item.title}}} key={item.id}>{item.title}</Link> */}
                                <br/>
                            </div>
                        )
                    })
                }
                {/* params 路由配置方式 */}
                {/* <Route path='/home/news/detail/:id/:title' component={Detail}/> */}
                {/* seach、state传递方式 */}
                <Route path='/home/news/detail' component={Detail}/>
            </div>
        )
    }
}
