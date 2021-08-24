//引入count的UI组件
import CountUI from '../../components/Count'
import {
    increment,
    decrement,
    anyceIncrement
} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//
// function mapStateToProps(state){
//     return {count:state}
// }
// function mapDispatchToProps(dispatch){
//     return{
//         jia:number =>dispatch(increment(number))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

//添加了容器组件store.subscribe就会自动监听了
//简化的写法(connect自带了dispatch)
export default connect(
    state =>({count:state}),
    {
        jia:increment,
        jian:decrement,
        jiaAsync:anyceIncrement,
    }
    )(CountUI)