import React from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Context from './context'
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    { id:1, completed: false, title: "Task1"},
    { id:2, completed: false, title: "Task2"},
    { id:3, completed: false, title: "Task3"},
    { id:4, completed: false, title: "Task4"}
  ])
  function toggleTodo(id){
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  function AddContact(title){
    setTodos(
      todos.concat([{
      title,
      id:Date.now(),
      completed: false
    }]))
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <Context.Provider value = {{ removeTodo }}>
      <div className="App">
        <header>
          <h1>Todo List</h1>   
        </header>
        <AddTodo onCreate = {AddContact}/>
        {todos.length ? <TodoList todos = {todos} onToggle = {toggleTodo}/>:<span>No contacts</span>}
      </div>
    </Context.Provider>
  );
}

export default App;
