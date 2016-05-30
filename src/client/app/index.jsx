import React from 'react';
import { render } from 'react-dom';

// import AwesomeComponent from './AwesomeComponent.jsx';
import TodoContainer from './TodoContainer.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<h1>ToDo App</h1>
				<TodoContainer/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
