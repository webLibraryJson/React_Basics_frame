import React, { Component } from 'react'

export default class App extends Component {
    async main(data){
        //通过在try catch捕捉错误消息
        try{
            let aa = await new Promise((resolve,reject) =>{
                // resolve(data);
                reject(data);
            })
            // let aa = await 20;
            console.log(aa)
        }catch(e){
            //在catch中捕捉到错误消息
            console.log(e);
        }
    }
    render() {
        return (
            <div>
               <button onClick={() =>{this.main('errve')}}>test</button>
            </div>
        )
    }
}
