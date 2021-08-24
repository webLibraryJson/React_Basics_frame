/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个rudecer
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import count  from './count'
//引入personReducer组件服务的reducer
import persons from './person'

//汇总所有的redux
export default combineReducers({
    count,
    persons,
})