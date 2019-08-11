import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = (props) => {
	const [ selected, setSelected ] = useState(0);
	const [ votes, setVotes ] = useState(new Array(props.anecdotes.length).fill(0));
	const handleAnecdote = () => {
		const randomNum = Math.floor(Math.random() * props.anecdotes.length);
		setSelected(randomNum);
	};
	const handleVote = () => {
		const newVotes = [ ...votes ];
		newVotes[selected] += 1;
		setVotes(newVotes);
	};
	const mostVoteAnecdote = () => {
		const mostVote = Math.max(...votes);
		const index = votes.indexOf(mostVote);
		return props.anecdotes[index];
	};
	return (
		<div>
			<h1>Anecdote of the day</h1>
			<div>{props.anecdotes[selected]}</div>
			<div>{`has ${votes[selected]} votes`}</div>
			<button onClick={handleVote}>vote</button>
			<button onClick={handleAnecdote}>next anecdote</button>
			<h1>Anecdote with the most votes</h1>
			<div>{mostVoteAnecdote()}</div>
		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
