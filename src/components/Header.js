//import React from 'react'
import React, { Component } from 'react'
import ToDo from './ToDo'
import TodoList from './ToDoList'
const addTask=(todo)=>{
    console.log(todo);
return(
    <div> 
        <ToDo text={todo}/>
    </div>
)
}
export default class header extends Component {
 
  render() {
   
   let handleKeyPress=(event)=> {
        if(event.key === 'Enter'){
           
            addTask(event.target.value);
           
          }
      } 
    return (
        <div className="Container" style={{alignItems: 'center'}}>
            <hr/>
        <input type="text" id="one" onKeyPress={(e)=>handleKeyPress(e)} />
       
        <hr/>
        
     </div>
    )
  }
}

// export const Header = () => {
//  function handleKeyPress(event) {
//     if(event.key === 'Enter'){
//         console.log('enter press here! ')
//       }
//   } 

//   return (
//     <div>
//     <input type="text" id="one" onKeyPress={handleKeyPress} />
//  </div>
//   )
// }
