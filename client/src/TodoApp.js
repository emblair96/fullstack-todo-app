import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function TodoApp() {
  const [newTodo, setNewTodo] = useState({name: "", complete: "false"})
  const [incompleteList, setIncompleteList] = useState([]);
  const [completedList, setcompletedList] = useState([]);
  
  const handleInput = (e) => {
    console.log(e.target.value)
    setNewTodo({name: e.target.value, complete: "false"})
  }
  const handleSubmit = () => {
    console.log('hi')
  }

  const dataFetch = () => {
    console.log('get data')
  }

  useEffect(() => {
    dataFetch()
  }, [])

  useEffect(() => {
    console.log(newTodo)
  }, [])

  return (
    <div className="container">
      <Header message="Todo List"/>
      <TodoForm 
        handleInput={handleInput} 
        handleSubmit={handleSubmit}
      />
      <TodoList />
    </div>
  );
}

export default TodoApp;
