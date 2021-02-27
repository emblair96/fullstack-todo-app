import './App.css';
import Header from './components/Header'

function TodoApp() {
  return (
    <div className="container">
      <Header message="Todo List"/>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
