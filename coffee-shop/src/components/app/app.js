import { Component } from "react";

import Promo from "../promo/promo";
import OurCoffee from "../our-coffee/our-coffee";
import AboutOurBeans from "../about-our-beans/about-our-beans";
import Search from "../search/search";
import Products from "../products/products";
import Content from "../content/content";
import ForYourPleasure from "../for-your-pleasure/for-your-pleasure";
import ForYourPleasureHeader from "../for-your-pleasure-header/for-your-pleasure-header";
import AboutIt from "../about-it/about-it";
import Footer from "../footer/footer";
import imgCoffeeFirst from "../../images/coffee_1.png";
import imgCoffeeSecond from "../../images/coffee_2.png";
import imgCoffeeThird from "../../images/coffee_3.png";

import "./app.sass";

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
				{id: 8, name: "AROMISTICO Coffee 1 kg", image: imgCoffeeThird, isFavorite: false, price: 20.99, country: "USA", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
			],
			currentPage: Number(localStorage.getItem('currentPage')) || 1,
			currentCoffee: '',
			searchStr: '',
			filter: ''
		}
	}

	onChangePage = (e) => {
		const page = Number(e.target.getAttribute("data-page"));
		
		if (page !== this.state.currentPage) {
			this.setState({currentPage: page, filter: '', searchStr: ''}, () => {
				localStorage.setItem('currentPage', this.state.currentPage);
			});
		}
	}

	filterCountry = (items, filter) => {
		if (!filter) {
			return items;
		}
		return items.filter(item => item.country === filter);
	}

	onFilterCountry = (filter) => {
		if (this.state.filter === filter) {
			this.setState({filter: ''});
		} else {
			this.setState({filter});
		}
	}

	filterProduct = (items, searchStr) => {
		if (searchStr.length === 0) return items;

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
		})
	}

	onChangeInputFilter = (e) => {
		this.setState({searchStr: e.currentTarget.value});
	}

	showThisCoffee = (e) => {
		const idCoffee = e.currentTarget.getAttribute("data-id");
		this.setState({currentCoffee: Number(idCoffee), currentPage: 4});
	}

	render() {
		const {data, currentPage, filter, searchStr} = this.state;

		const visibleData = this.filterCountry(this.filterProduct(data, searchStr), filter);

		let Header, Body;
		if (currentPage === 2) {
			Header = <OurCoffee onChangePage={this.onChangePage}/>;
			Body = <>
						<AboutOurBeans/>
						<Search data={this.state} onFilterCountry={this.onFilterCountry} onChangeInputFilter={this.onChangeInputFilter}/>
						<Products data={visibleData} showThisCoffee={this.showThisCoffee}/>
					</>;
		} else if (currentPage === 3) {
			Header = <ForYourPleasureHeader onChangePage={this.onChangePage}/>;
			Body = <>
						<ForYourPleasure/>
						<Products data={visibleData} showThisCoffee={this.showThisCoffee}/>
					</>;
		} else if (currentPage === 4) {
			Header = <OurCoffee onChangePage={this.onChangePage}/>;
			Body = <>
						<AboutIt data={this.state}/>
					</>;
		} else {
			Header = <Promo onChangePage={this.onChangePage}/>;
			Body = <Content data={this.state.data} showThisCoffee={this.showThisCoffee}/>;
		}

		return (
			<div className="app">
				{Header}
				{Body}
				<Footer onChangePage={this.onChangePage}/>
			</div>
		);
	}
}

export default App;