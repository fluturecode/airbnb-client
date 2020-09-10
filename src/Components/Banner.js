import React, { useState, useHistory } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

function Banner() {
	const history = useHistory();
	// When "search dates" button is clicked, date picker will show
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="banner">
			<div className="banner__search">
				{showSearch && <Search />}

				<Button
					onClick={() => setShowSearch(!showSearch)}
					className="banner__searchButton"
					variant="outlined"
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className="banner__info">
				<h1>Discover your next home away from home...</h1>
				<h5>
					Plan a different kind of getaway to uncover the hidden gems near you
				</h5>
				<Button onClick={() => history.push("/search")} variant="outlined">
					Explore Nearby
				</Button>
			</div>
		</div>
	);
}

export default Banner;
