import React from 'react';
import './index.css';

function Details(props) {

    return (
		<div className="modal">
			<div>Title: {props.info.Title}</div>
			<div>Type: {props.info.Type}</div>
			<div>imdbRating: {props.info.imdbRating}</div>
			<div>Language: {props.info.Language}</div>
			<div>Awards: {props.info.Awards}</div>
			<div>Country: {props.info.Country}</div>
			<div>Director: {props.info.Director}</div>
			<div>Production: {props.info.Production}</div>
			<div>Plot: {props.info.Plot}</div>
		</div>
	);
}

export default Details;
