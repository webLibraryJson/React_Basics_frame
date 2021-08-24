import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        // sum:0,
    }
    add = ()=>{
        const {value} = this.sumcont
        // const {sum} = this.state
        // this.setState({sum:sum+sumcont.value*1})
        this.props.jia(value*1)
    }
    del = ()=>{
        const {value} = this.sumcont
        // const {sum} = this.state
        // this.setState({sum:sum-sumcont.value*1})
        this.props.jian(value*1)
    }
    //奇数加
    oddTerm = ()=>{
        const {value} = this.sumcont
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }
    //异步加
    ybAdd = ()=>{
        const {value} = this.sumcont
        this.props.jiaAsync(value*1,500)
    }
    render() {
        console.log('父组件的值',this.props);
        return (
            <div>
                <div>当前求和为：{this.props.count}</div>
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
