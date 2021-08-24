import {ADD_PERSON} from '../constant'
//初始化人的列表
const initSate = [{id:'001',name:'tom',age:18}]
function personReducer(perState = initSate,action){
    const {type,data} = action
    switch (type) {
        case ADD_PERSON://添加一个人
            //perState.unshift(data); //此处不可以这样写，这样会导致preState被改写了，personReducer就不会从新渲染（personReducer是纯函数）
            return [data,...perState]
        default:
            return perState;
    } 
}

export default personReducer