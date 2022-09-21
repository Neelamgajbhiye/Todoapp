import React from 'react';
import  Footer from './Footer';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = ({task,list}) => {
    //console.log(showall());
    
    const [todos, setTodos] = React.useState([
        {
          text: "Learn about React",
          isCompleted: false,
          isRemoved: false,
        },
        {
          text: "Training session 1",
          isCompleted: false,
          isRemoved: false,
        },
        {
          text: "Training session 2",
          isCompleted: false,
          isRemoved: false,
        }
      ]);

      const[tabname,setTabname] = React.useState(['allTodos']);
      const[todolist,settodolist] = React.useState(todos);
    
      const addTodo = text => {
        setTabname("AllTodos");
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
      const completeTodo = (index,checked) => {
        const newTodos = [...todos];
      if(checked) {
        newTodos[index].isCompleted = true;
      }
      else
      {
        newTodos[index].isCompleted = false;
      }
        
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isRemoved = true;
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      const allTodos=()=>{
          console.log(todos.length);
         return todos.length
      }

      const completedTodos=()=>{
        let count=0;
          todos.forEach((index,todo)=>{
              
             if(todo.isCompleted==='true')
             {
                 count+=1;
                
             }
             console.log(count);
          })
          return count;
      }

      const activeTodos=()=>{
        let count=0;
      let todolista= todos.filter((todo)=>
               todo.isCompleted!==true
        
        )
        console.log(todolista);
      // todos.map((todo,index)=>(
      //     <ToDo key={index} 
      //     text={todo.text}
      //     index={index}
      //     completeTodo={completeTodo}
      //     removeTodo={removeTodo}
      //     />))
      //   // todos.forEach((index,todo)=>{
        //        if(todo.isCompleted!=='true')
        //    {
        //        count+=1;
              
        //    }
        //    console.log(count);
        // })
        // return count;
    }

    const nowShowing=(tabname)=>
    {

      console.log(tabname);
      setTabname(tabname);
      
      //   if(tabname==='allTodos')
      //   {
      //     // const newTodos = [...todos];
      //     // setTodos(newTodos);
      //       // return(todos.map((todo,index)=>(
      //       //     <ToDo key={index} 
      //       //     text={todo.text}
      //       //     index={index}
      //       //     completeTodo={completeTodo}
      //       //     removeTodo={removeTodo}
      //       //     />)))
      //   }
      //   else if (tabname==='activeTodos')
      //   {
      //     //const newTodos = [...todos,todos.isCompleted];
      //     //setTodos(newTodos);
      //     //setTodos()
      //   }
      //   else
      //   {
      //     const newTodos =todos.filter(todo =>todo.isCompleted===true);
      //     setTodos(newTodos);

      //       // return(todos.filter(todo =>todo.isCompleted===true).map((todo,index)=>(
      //       //     <ToDo key={index} 
      //       //     text={todo.text}
      //       //     index={index}
      //       //     completeTodo={completeTodo}
      //       //     removeTodo={removeTodo}
      //       //     />)))
      //  }
    }

const Settodolist=(tabname)=>{
  
  if(tabname==='allTodos')
  {
      return(todos.map((todo,index)=>(
          <ToDo key={index} 
          text={todo.text}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />)))
  }
  else if (tabname==='activeTodos')
  {
    //const newTodos = [...todos,todos.isCompleted];
    //setTodos(newTodos);
    //setTodos()

    return(todos.filter(todo=>todo.isRemoved===false && todo.isCompleted===false).map((todo,index)=>(
      <ToDo key={index} 
      text={todo.text}
      index={index}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      />)))
  }
  else
  {
    // const newTodos =todos.filter(todo =>todo.isCompleted===true);
    // setTodos(newTodos);

      return(todos.filter(todo =>todo.isCompleted===true).map((todo,index)=>(
          <ToDo key={index} 
          text={todo.text}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />)))
 }

}


   // const atodo=todos.filter(todo =>todo.isCompleted===false)

    return (
        <div className="todo-list" >
            {/* style={{backgroundColor: 'black',textColor: 'white'}}> */}
            <hr/>
            <ToDoForm addTodo={addTodo}/>
            <hr/>
            {/* {(allTodos.length)>0?count=1:false} */}
           {/* {()nowShowing('allTodos')} */}
{/* {tabname} */}




{(tabname)=>Settodolist(tabname)}

{
           (tabname==='activeTodos') 
           ?
           todos.filter(todo=>todo.isRemoved===false && todo.isCompleted===false)
           .map((todo,index)=>(
            <ToDo key={index} 
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}/>))
          
                :
            (tabname==='completedTodos')
            ?
            todos.filter(todo =>todo.isCompleted===true).map((todo,index)=>(
                  <ToDo key={index} 
                  todo={todo}
                  index={index}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}/>))
                  :

                  todos.map((todo,index)=>(
                    <ToDo key={index} 
                    todo={todo}
                    index={index}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    />))


                 
            }
            <Footer 
            allTodos={allTodos()} 
            completedTodos={completedTodos()} 
            activeTodos={activeTodos()}
            onAction={(e)=>nowShowing(e)}
            />

         
           </div>
    );
};

export default ToDoList;