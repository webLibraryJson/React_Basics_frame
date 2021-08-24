import React, { Component } from 'react'
import {nanoid} from 'nanoid'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {person} from '../../redux/actions/person'

class Person extends Component {
    add = ()=>{
        const name = this.name.value
        const age = this.age.value
        const personObj = { id:nanoid(),name,age}
        this.name.value = ''
        this.age.value = ''
        // console.log(personObj);
        this.props.addPerson(personObj)
    }
    render() {
        const {person} = this.props
        return (
            <div>
                <div>我是Person组件,上方组件的求和{this.props.sum}</div>
                <input ref={c => this.name=c} type="text" placeholder='请输入姓名' />
                <input ref={c => this.age=c} type="text" placeholder='请输入年龄' />
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        person.map(personobj => <li key={personobj.id}>姓名：{personobj.name}---年龄{personobj.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}

//添加了容器组件store.subscribe就会自动监听了
//简化的写法(connect自带了dispatch)
export default connect(
    state =>({
        person:state.rens,
        sum:state.he

    }),//映射状态
    {
        addPerson:person,//映射操作状态的方法
    }
    )(Person)