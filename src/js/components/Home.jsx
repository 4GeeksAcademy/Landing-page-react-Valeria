import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />

			<div className="contenedor">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<Footer />
		</div>

	);
};

export default Home;