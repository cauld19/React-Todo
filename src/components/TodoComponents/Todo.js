import React from 'react';


const Todo = props => {


        return (
            <div 
                onClick={() => props.toggleCompleted(props.todo.id)}
                className={`todo${props.todo.completed ? " completed" : ""}`}
            >
                <li className="todo-task-name">{props.todo.task}</li>
          </div>
          
        );
}

export default Todo;