import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Person from "./Person.js";
import Section from "./Section";
import Kawaii from "./Kawaii";
import ApiX from "./ApiX.js";
import {Planet} from 'react-kawaii';

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
const fetchUrl3 = 'https://random.dog/woof.json';
const fetchUrlX = 'http://numbersapi.com/2/29/date';


class ArtApi extends Component {
	state = {
		apiData: [],
		apiData2: [],
		apiDataX: [],
	};

	componentDidMount() {
		fetch(fetchUrl)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData: json.data }));
		fetch(fetchUrl3)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData2: data.url }));
		fetch(fetchUrlX)
			.then((res) => res.json())
			.then((data) => this.setState({ apiDataX: data.url }));
	}
	
	render() {
		return (
			<div className="main">
				<Section image={this.state.apiData} />
				<Person image={this.state.apiData2} />
				<ApiX image={this.state.apiDataX} />
				<section className="section">
					<Planet size={200} mood={(this.state.apiData && this.state.apiData2
					) ? "blissful" : "sad"} color="#FDA7DC" />
				</section>
				<section className="section">
					<button onClick={this.clickHandler}>
						Click!
					</button>
				</section>
			</div>
		);
	}
}




// class ArtApi extends Component {
// 	state = {
// 		ApiOneData: [],
// 		ApiTwoData: [],
// 	};

// 	componentDidMount() {
// 		this.fetchApiOne();
// 		this.fetchApiTwo();
// 	}
// fetchApiOne = async () => {
// 	const response = await get('https://aws.random.cat/meow')
// 	this.setState({ ApiOneData: response.data.file })
// 	// setFirstAPI(response.data.file)
// }
// fetchApiTwo = async () => {
// 	const response = await get('https://randomfox.ca/floof/')
// 	this.setState({ ApiTwoData: response.data.image })
// 	// setSecondAPI(response.data.image)
// }
// 	clickHandler = () => {

// 		this.setState({ ApiOneData: null, ApiTwoData: null }, () => {
// 			this.fetchApiOne();
// 			this.fetchApiTwo();
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="main">
// 				<Quadrant image={this.state.ApiOneData} />
// 				<Quadrant image={this.state.ApiTwoData} />
// 				<section className="section">
// 					<Planet size={200} mood={(this.state.ApiOneData && this.state.ApiTwoData) ? "blissful" : "sad"} color="#FDA7DC" />
// 				</section>
// 				<section className="section">
// 					<button onClick={this.clickHandler}>
// 						Click!
// 					</button>
// 				</section>
// 			</div>
// 		);
// 	}
// }



export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
