import { Component } from "react";

import Promo from "../promo/promo";
import Content from "../content/content";
import imgCoffeeFirst from "../../images/coffee_1.png";
import imgCoffeeSecond from "../../images/coffee_2.png";
import imgCoffeeThird from "../../images/coffee_3.png";

import "./app.sass";
import Footer from "../footer/footer";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{id: 1, name: "Solimo Coffee Beans 2 kg", image: imgCoffeeFirst, isFavorite: true, price: 10.73, country: "Russia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 2, name: "Presto Coffee Beans 1 kg", image: imgCoffeeSecond, isFavorite: true, price: 15.99, country: "Russia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 3, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: true, price: 6.99, country: "Russia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 4, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 7.99, country: "Brazil", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 5, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 11.99, country: "Kenya", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 6, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 10.19, country: "Columbia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 7, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 5.49, country: "China", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
				{id: 7, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 20.99, country: "USA", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
			],
			term: '',
			filter: 'all'
		}
	}


	render() {
		return (
			<div className="app">
				<Promo/>
				<Content data={this.state.data}/>
				<Footer/>
			</div>
		);
	}
}

export default App;