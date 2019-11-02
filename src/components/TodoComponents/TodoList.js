// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from "./Todo"

const TodoList = props => {


    
        return (
          <div className="todo-outer-div">
              {props.todos.map(todo =>(
                  <Todo 
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={props.toggleCompleted}
                  />
              ))}
              <button onClick={props.clearTodos}>Clear Todos</button>
          </div> 
        );
}


    

export default TodoList;