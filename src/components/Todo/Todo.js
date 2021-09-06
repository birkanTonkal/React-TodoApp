import React, { useEffect, useState } from "react";
import todoCss from "./Todo.css";


const Todo = ({ todoList , deleteItem}) => {
  const [removeItem, removeItemHandler] = useState([]);
  useEffect(() =>  deleteItem(removeItem), [removeItem]);
  let newTodoList = [todoList];
  function handleClick(e){
    newTodoList = todoList.filter((item, index) => index.toString() !== e.target.id);
    removeItemHandler(newTodoList)
    
  }
 
  return (
    <div className={todoCss["todos"]}>
      <div>
        <ul className="todoList">
          {todoList.map((todo, index) => (
            <li className = "todo" key={index} id={index} onClick = {handleClick} >
              {todo} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
