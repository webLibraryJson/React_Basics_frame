import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
    state = {
        newsArr:[
            {id:'001',title:'体育新鲜事',coment:'体育新鲜事内容'},
            {id:'002',title:'生活知识',coment:'生活中的那些事'},
            {id:'003',title:'国际奥运',coment:'奥运那些事'}
        ]
    }
    render() {
        //params接收方式
        // const {id} = this.props.match.params
        //search接收方式
        const {id} = qs.parse(this.props.location.search.slice(1))
        //state接收方式
        // const {id} = this.props.location.state

        const {newsArr} = this.state
        const newArr = newsArr.filter((item) =>{
            return item.id === id
        })
        return (
            <div>
                 <p>id：{id}</p>
                 <p>标题：{newArr[0].title}</p>
                 <p>内容：{newArr[0].coment}</p>
             </div>
        )
    }
}
