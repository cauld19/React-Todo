import React from "react";

const TodoForm = props => {
    

        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <input 
                        onChange={props.handleChanges}
                        type="text"
                        name="todo"
                        value={props.todoName}
                    />
                    <button>Add Todo</button> 
                </form>
                <form onSubmit={props.handleSearchSubmit}>
                    <input
                        onChange={props.handleSearchChange}
                        type="text"
                        name="search"
                        value={props.value}
                    />
                    <button>Search</button>
                </form>
            </div>
                
        )

}

export default TodoForm;