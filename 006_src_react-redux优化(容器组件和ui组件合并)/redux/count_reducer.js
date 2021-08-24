import {INCREMENT,DECREMENT} from './constant'
const initState = 0
function countReducer(preState = initState,action){
    //从action对象中获取：type、data
    const {type,data} = action
    //根据type决定如何加工数据
    switch(type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState
    }
}

export default countReducer;