import React from 'react'
import Todo from './ToDo';
import allTodos from './ToDoList';

 const Footer = (props) => {
const setTabname=(tabname)=>
{

  props.onAction(tabname);}
 

  return (
    <div className='Container' style={{justifyContent: 'space-between'}}>
        <hr/>
        <span >{props.allTodos} item left</span>
        <button className="btn btn-primary" style={{ margin:'5px', padding:'5px'}} onClick={()=>setTabname('allTodos')}>all</button>
        
        <button className="btn btn-primary" style={{ margin:'5px', padding:'5px'}} onClick={()=>setTabname('activeTodos')}>active</button>
        <button className="btn btn-primary" style={{ margin:'5px', padding:'5px'}} onClick={()=>setTabname('completedTodos')}>completed</button>
        <hr/>
    </div>
  )
}

export default Footer;