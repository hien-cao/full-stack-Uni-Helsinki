import React, { useState } from 'react';
import './App.css';

function Statistics({ good, neutral, bad }) {
	return (
		<div className="">
			<h1>statistics</h1>
			{good + neutral + bad ? (
				<div>
					<p>{`good ${good}`}</p>
					<p>{`neutral ${neutral}`}</p>
					<p>{`bad ${bad}`}</p>
					<p>{`all ${good + neutral + bad}`}</p>
					<p>{`average ${good + neutral + bad ? (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad) : 0}`}</p>
					<p>{`positive ${good ? good / (good + neutral + bad) * 100 : 0} %`}</p>
				</div>
			) : (
				<p>No feedback given</p>
			)}
		</div>
	);
}

function App() {
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	return (
		<div className="">
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
}

export default App;
