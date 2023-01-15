import './App.css'
import React, { useState } from 'react';
var budget = 0;

function TodoApp() {
//   const date = new Date();

//   const getTheDate = () => {
//     return ((date.getMonth()-1) < 10 ? ('0'+(date.getMonth()-1)) : (date.getMonth()-1))  + '/' + ((date.getDate() < 10) ? ('0'+ date.getDate()) : date.getDate()) + '/' + date.getFullYear();
//   };

  const [todoItems, setTodoItems] = React.useState([]);
  const addTodo = (text, number) => {
    if(text.length <= 117){
        budget+= parseInt(number);
      const newTodoItems = [...todoItems, {text:text, number:number, check:false}];
      setTodoItems(newTodoItems);
    }
  };
  const delItem = index => {
    const newTodoItems = [...todoItems];
    var item = newTodoItems[index]
    budget-= parseInt(item.number);
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };
  const done = index => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].check = true;
    setTodoItems(newTodoItems);
  };
  return (
    <div className="submission">
      <div className='submitForm'><TodoForm addTodo={addTodo}/></div>
      <div className = "todoList">
        {todoItems.map((todo, index) => (
          <TodoItem index={index} todo={todo} delItem={delItem} done={done}/>
        ))}
      </div>
      <div className='budget'>
        <h3 className='text'>Total:</h3>
        <h3 className='text'>${budget}</h3>
      </div>
    </div>
  );
}

function TodoItem({todo, delItem, done, index}){
  return (
          <div className = "todo">
            <div className='group1'>
                <button className='done' onClick={()=>done(index)}>done</button>
              {/* <div className='date'>{todo.date}</div> */}
              <div className="todoText" style={{textDecoration: todo.check ? "line-through" : ""}}>{todo.text}</div>
              </div>
              <div className='group2'>
                <div className='numberText'>${todo.number}</div>
                <div className="delete" onClick={()=>delItem(index)}></div>
              </div>
          </div>)
};

function TodoForm({addTodo}){
  const[input, setInput] = useState("");
  const[number, setNumber] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(input==="") return;
    if(number==="") return;
    addTodo(input, number);
    setInput("");
    setNumber("");
  };

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={input} placeholder="expense" onChange={e=>setInput(e.target.value)}></input>
    <input type="number" step="any" placeholder="cost" onChange={e=>setNumber(e.target.value)}></input>
    <button className="submitButton" type='submit'>Add</button>
  </form>
  );
};

export default TodoApp;
