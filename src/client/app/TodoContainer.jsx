import React from 'react';
import { render } from 'react-dom';

// import TodoList from './TodoList.jsx';
// import Todos from './TodoModel.js';
import TodoItem from './TodoItem.jsx';

class TodoContainer extends React.Component {

	loadTodos() {
		let data = require('./TodoData.json');

		this.setState({ todos: data });
	}

	constructor(props) {
		super(props);

		this.state = { todos: [] };
	}

	componentDidMount() {
		this.loadTodos();
	}

	addTodo() {
		let id = 5;
		this.setState( (state) => ({ todos: state.todos.concat({ "id" : id, "desc" : "Test" }) }) );
	}

	render () {
		return (
			<div>
				<button onClick={this.addTodo.bind(this)}>Add Todo</button>
				<ul>
					{this.state.todos.map( (item) =>
						<TodoItem key={item.id} desc={item.desc} />
					)}
				</ul>
			</div>
		);
	}
}

export default TodoContainer;
