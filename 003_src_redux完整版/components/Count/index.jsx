import React, { Component } from 'react'
//引入store，用于获取redux中保存的状态
import store from '../../redux/store'
import {increment,decrement} from '../../redux/count_action'

export default class Count extends Component {
    state = {
        // sum:0,
    }
    add = ()=>{
        const {sumcont} = this
        // const {sum} = this.state
        // this.setState({sum:sum+sumcont.value*1})
        store.dispatch(increment(sumcont.value*1));
    }
    del = ()=>{
        const {sumcont} = this
        // const {sum} = this.state
        // this.setState({sum:sum-sumcont.value*1})
        store.dispatch(decrement(sumcont.value*1));
    }
    //奇数加
    oddTerm = ()=>{
        if(store.getState() % 2 !== 0){
            this.add();
        }
    }
    //异步加
    ybAdd = ()=>{
        setTimeout(() => {
            this.add()
        }, 500);
    }
    render() {
        return (
            <div>
                <div>当前求和为：{store.getState()}</div>
                <select ref={c =>this.sumcont = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.del}>-</button>&nbsp;
                <button onClick={this.oddTerm}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.ybAdd}>异步加</button>&nbsp;
            </div>
        )
    }
}
