import React,{ useState } from "react";
import './App.css';

function App() {
  /*
Below array destructure syntax is equivalent to:
const newTodostateArr = useState("");
const newTodo = newTodoStateArr[0];
const setNewTodo = newTodostateArr[1];
*/
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  

// ______________________________________________________________________
  /*preventing the form from refreshing page because react is faster*/
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0){
      return;
    }
    
    const todoItem ={
      text: newTodo,
      complete: false
    }
  
    setTodos([...todos, todoItem]);
    setNewTodo([""]);
  };
// ______________________________________________________________________
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i)=>{
      return i != delIdx;
    });
    
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i)=>{
      if(idx == i) {
        todo.complete = !todo.complete;
      }
      
      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}
      >
        <input onChange={(event)=>{
          setNewTodo(event.target.value);
          }} type="text"
             value={newTodo}
          />
          <div>
            <button>Add</button>
          </div>
      </form>
      {
        todos.map((todo, i) => {
          const todoClasses =[];
          if (todo.complete){
           todoClasses.push("line-through")
          }
        return (
        <div key={i}>
          <input onChange={(event)=>{
            handleToggleComplete(i);
          }} checked={todos.complete} type="checkbox"/>
          
          <span className={todoClasses.join(" ")}>{todo.text}</span>
          
          <button onClick={(event)=>{
            handleTodoDelete(i);
          }}>Delete</button>
        </div>
        );
        })}
    </div>
  );
}
    

export default App;
        
    
