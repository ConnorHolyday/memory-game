import React from 'react';
import { render } from 'react-dom';

class TodoItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>{ this.props.desc }</li>
		);
	}
}

export default TodoItem;
