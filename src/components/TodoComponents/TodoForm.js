import React from "react";

const TodoForm = props => {
    

        return (
            <div>
                <form className="todo-form" onSubmit={props.handleSubmit}>
                    <input 
                        onChange={props.handleChanges}
                        type="text"
                        name="todo"
                        value={props.todoName}
                    />
                    <button>Add Todo</button> 
                </form>
                <form className="todo-form" onSubmit={props.handleSearchSubmit}>
                    <input
                        onChange={props.handleSearchChange}
                        type="text"
                        name="search"
                        value={props.searchValue}
                    />
                    <button>Search</button>
                </form>
                <button onClick={() => props.resetSearch()}>Reset</button>
            </div>
                
        )

}

export default TodoForm;