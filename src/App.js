import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Search from './components/Search';
import Sort from './components/Sort';
import data from './data.json';
import { Switch, Route, useHistory } from 'react-router-dom';
import './index.css'

function App() {
	const [ moviesDatas, setMoviesDatas ] = useState([]);
	const [ field, setField ] = useState('Title');
	const [ query, setQuery ] = useState('');
	const [ fieldSort, setFieldSort ] = useState('Sort Using');
	const [ queryDatas, setQueryDatas ] = useState([]);
	const history = useHistory();

	const handleSort = () => {
		const temp = moviesDatas.slice().sort((r1, r2) => {
			if (fieldSort === 'Title') {
				return r1.Title - r2.Title;
			} else if (fieldSort === 'Year') {
				return r1.Year - r2.Year;
			} else if (fieldSort === 'BoxOffice') {
				return r1.BoxOffice - r2.BoxOffice;
			} else if (fieldSort === 'imdbRating') {
				return r1.imdbRating - r2.imdbRating;
			}
		});
    console.log("sorted "+temp);
		setQueryDatas(temp);
		history.push('/sort');
	};

	const search = () => {
		const temp = moviesDatas.filter((data) => {
			if (field === 'Title') {
				return data.Title.toString().indexOf(query) > -1;
			} else if (field === 'Actors') {
				return data.Actors.toString().indexOf(query) > -1;
			} else if (field === 'Country') {
				return data.Country.toString().indexOf(query) > -1;
			} else if (field === 'Director') {
				return data.Director.toString().indexOf(query) > -1;
			}
		});
		console.log(temp);
		setQueryDatas(temp);
		history.push('/search');
	};

	useEffect(() => {
		setMoviesDatas(data);
		console.log(data);
	}, []);

	return (
		<div className="App">
			<header>
				<div className="search">
					<label>
						Search 
						<select value={field} onChange={(e) => setField(e.target.value)}>
							<option value="Title">Title</option>
							<option value="Actors">Actors</option>
							<option value="Country">Country</option>
							<option value="Director">Director</option>
						</select>
					</label>

					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						name="query"
						id="query"
					/>
					<button onClick={search}>Search</button>
				</div>
				<div className="search">
					<select value={fieldSort} onChange={e => setFieldSort(e.target.value)}>
						<option value="Sort Using">Sort Using</option>
						<option value="Title">Title</option>
						<option value="Year">Year</option>
						<option value="BoxOffice">BoxOffice</option>
						<option value="imdbRating">imdbRating</option>
					</select>
					<button onClick={handleSort}>Sort</button>
				</div>
			</header>
			<Switch>
				<Route path="/search">
					<Search queryDatas={queryDatas} />
				</Route>
				<Route path="/sort">
					<Sort queryDatas={queryDatas} />
				</Route>
				<Route path="/">
					<Home moviesDatas={moviesDatas} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
