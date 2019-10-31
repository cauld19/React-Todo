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
      todos: data
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
    this.setState({
      todos: this.state.todos.filter(todo => {
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
      ]
    })
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList 
          todos={this.state.todos}
          clearTodos={this.clearTodos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo}/>

      </div>
      
    );
  }
}

export default App;
