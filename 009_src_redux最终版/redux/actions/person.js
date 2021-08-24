import {ADD_PERSON} from '../constant'
//创建怎加一个人的对象
export const addPerson = personobj =>({type:ADD_PERSON,data:personobj})