import React from "react";

const Form = ({ setInputText, inputText, setTodos, todos, status, setStatus }) => {

    //here i can wirite js code and function
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
        //console.log(e.target);
    };

    //Prevent page referesh
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: inputText, 
                completed: false, 
                id: Math.random() * 1000
            },
        ]);
    };

    const statusHandler = (e) => {
      //console.log(e.targrt.value);
      setStatus(e.target.value);
    };

  
    return(
        <form>
          <input 
            value = { inputText} 
            onChange = {inputTextHandler} 
            type="text" className="todo-input" 
          />
          <button onClick = { submitTodoHandler } className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div onChange = { statusHandler } className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
    );
};
export default Form;