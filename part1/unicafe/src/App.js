import React, { useState } from 'react';
import './App.css';

const Button = ({ handleClick, name }) => {
	return <button onClick={handleClick}>{name}</button>;
};

const Statistic = ({ name, value }) => {
	return <p>{`${name} ${value}`}</p>;
};

const Statistics = ({ good, neutral, bad }) => {
	return (
		<div className="">
			<h1>statistics</h1>
			{good + neutral + bad ? (
				<div>
					<Statistic name={'good'} value={good} />
					<Statistic name={'neutral'} value={neutral} />
					<Statistic name={'bad'} value={bad} />
					<Statistic name={'all'} value={good + neutral + bad} />
					<Statistic
						name={'average'}
						value={good + neutral + bad ? (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad) : 0}
					/>
					<Statistic name={'positive'} value={good ? good / (good + neutral + bad) * 100 : 0} />
				</div>
			) : (
				<p>No feedback given</p>
			)}
		</div>
	);
};

const App = () => {
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	return (
		<div className="">
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} name={'good'} />
			<Button handleClick={() => setNeutral(neutral + 1)} name={'neutral'} />
			<Button handleClick={() => setBad(bad + 1)} name={'bad'} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
