import React from 'react';

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

import "./components/TodoComponents/Todo.css"

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
    this.state = {
      todos: data,
      permTodos: data,
      todoName: "",
      searchValue: ''
    }
  }

  
  
  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  clearTodos = () => {
    console.log("clearPurchased", this.state.permTodos);
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      }),
      permTodos: this.state.permTodos.filter(todo => {
        return !todo.completed
      })
    })
    
  }

  addTodo = todoName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ],
      permTodos: [
        ...this.state.todos,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    })
    localStorage.setItem(`todo ${todoName}`, todoName)
  };

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }


  
  
  handleSubmit = e => {
      e.preventDefault();
      if (this.state.todoName !== "") {
          this.addTodo(this.state.todoName);
          e.target.reset();
      }
  }

  

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    const filteredSearch = this.state.todos.filter(todo => todo.task.toLowerCase().includes(searchValue.toLowerCase()))
    if(filteredSearch.length === 0) {
      alert("none")
      e.target.reset();
    } else {
      this.setState({
        todos: [...filteredSearch],
      })
      e.target.reset();
      localStorage.setItem(`search ${searchValue}`, searchValue) 
    }
    
  }

  resetSearch = () => {
    this.setState({
      todos: this.state.permTodos
    })
    console.log("reset search")
  }






  render() {
    return (
      <div>
        <div className="todo-title">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          todos={this.state.todos}
          clearTodos={this.clearTodos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          addTodo={this.addTodo}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSearchSubmit={this.handleSearchSubmit}
          resetSearch={this.resetSearch}
        />

      </div>
      
    );
  }
}

export default App;
