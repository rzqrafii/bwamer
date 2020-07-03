import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPages extends Component {
	constructor(props) {
		super(props);
		// penunjuk most picked
		this.refMostPicked = React.createRef();
	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				{/* landingpage.hero / landingpage.mostpicked ini ngambil dari landingpage.json */}
				<Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={landingPage.mostPicked}
				/>
				<Categories data={landingPage.categories} />
				<Testimony data={landingPage.testimonial} />
				<Footer />
			</>
		);
	}
}
