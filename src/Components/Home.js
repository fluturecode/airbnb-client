import React from "react";
import "./Home.css";
import Banner from "./Banner";

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card />
				<Card />
				<Card />
			</div>
			<div className="home__section">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Home;
