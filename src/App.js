import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {

  

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos , setFilteredTodos] = useState([]);

  //Use Effect

  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);


  //everey time todos state changes print hey
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default :
          setFilteredTodos(todos);
          break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
          Nikhil's Todo List
      </header>
      <Form 
        inputText = {inputText} 
        setInputText = {setInputText}
        todos = { todos }
        setTodos = { setTodos }
        setStatus = { setStatus }
        status = { status }
      />
      <TodoList 
        todos = { todos }
        setTodos = { setTodos}
        filteredTodos = { filteredTodos }
      />
    </div>
  );
}
export default App;
