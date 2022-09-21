

 const ToDo = (props) => {
   console.log(props);

 const handleChange=(e)=>
   {
     console.log(e+"todojs");

    // console.log(props.completeTodo(props.todo.index, props.todo.isCompleted));
     switch(e)
     {
       case true:
       props.todo.isCompleted = true;  
       props.completeTodo(props.index,true);
       break;

       case false:
        props.todo.isCompleted = false;
         props.completeTodo(props.index,false);
       break;
     }
     //props.completeTodo(props.index)
   }
  return (
    <div className="row" >
      <div className="col-2">
      <input type='checkbox' onChange={(e) =>handleChange(e.target.checked)}/>
      </div>
      
  <div className="col-8" style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }} >{props.todo.text}</div>
  <div className="col-2">  <button className="btn btn-xs btn-danger" onClick={() => props.removeTodo(props.index)}>X</button></div>
</div>
    
  )
}


export default ToDo;
