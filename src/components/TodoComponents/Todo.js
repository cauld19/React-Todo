import React from 'react';


const Todo = props => {



    const hanldeClick = () => {
        props.toggleCompleted(props.todo.id)
    }

        return (
            <div 
                onClick={hanldeClick}
                className={`todo${props.todo.completed ? " completed" : ""}`}
            >
                <p>{props.todo.task}</p>
          </div>
          
        );
}

export default Todo;