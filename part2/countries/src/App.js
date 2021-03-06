import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
	const [ displayDetail, setDisplayDetail ] = useState(false);
	return (
		<div key={country.name}>
			{country.name}
			<button onClick={() => setDisplayDetail(!displayDetail)}>show</button>
			<CountryDetail displayDetail={displayDetail} country={country} />
		</div>
	);
};

const CountryDetail = ({ displayDetail, country }) => {
	return (
		displayDetail && (
			<div>
				<h1>{country.name}</h1>
				<div className="">capital {country.capital}</div>
				<div className="">population {country.population}</div>
				<h4>languages</h4>
				<ul>{country.languages.map((lang) => <li>{lang.name}</li>)}</ul>
				<img style={{ width: '200px' }} src={country.flag} alt={country.name} />
			</div>
		)
	);
};

const App = (props) => {
	const [ filter, setFilter ] = useState('');
	const [ countries, setCountries ] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => setCountries(response.data));
	}, []);

	const filteredCountries = countries.filter(
		(country) => country.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
	);
	return (
		<div>
			find countries <input onChange={(e) => setFilter(e.target.value)} value={filter} />
			{filter &&
				(filteredCountries.length > 10 ? (
					<div>Too many matches, specify another filter</div>
				) : (
					filteredCountries.map((country) => <Country country={country} />)
				))}
		</div>
	);
};

export default App;
