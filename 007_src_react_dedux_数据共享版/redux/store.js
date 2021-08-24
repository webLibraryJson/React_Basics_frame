//该文件用于暴露一个store对象，整个应用只有一个store对象

//引入createStore,专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer  from './reducers/count'
//引入personReducer组件服务
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'   //异步action还需要applyMiddleware中间件
//汇总所有的redux
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer,
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk))
