import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ""
        }
    };

    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todoName !== "") {
            this.props.addTodo(this.state.todoName);
            this.setState({
                todoName: ""
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    name="todo"
                    value={this.state.todoName}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;