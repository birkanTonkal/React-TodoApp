
import { useState } from "react";
import Card from "../UI/Card";
import Todo from "./Todo";
import cssClass from "./TodoForm.module.css";

const TodoForm = () => {
  const [inputValue, inputValueHandler] = useState([]);
  let inputChange;
  const submitHandler = (event) => {
    event.preventDefault();
    
    if(!inputChange){
      return;
    }
    else{
      inputValueHandler([...inputValue, inputChange]);
      event.target.reset(); 
    }
     
  };
  const deleteItem = (array) => {inputValueHandler(array)};
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={cssClass["title"]}>
          <h1>Todo App</h1>
        </div>
        <div className = {cssClass["input-container"]}>
          <input
            className={cssClass["input"]}
            id="input"
            type="text"
            onChange={(e) => {inputChange = e.target.value}}
          />
          <button
            className={cssClass["button"]}
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>

      <Todo todoList = {inputValue} deleteItem = {deleteItem}> </Todo>
    </Card>
  );
};

export default TodoForm;
