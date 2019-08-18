import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};

	const Header = (props) => {
		return <h1>{props.name}</h1>;
	};

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
