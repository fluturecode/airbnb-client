import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import { Map } from './Map';
import "./SearchResult.css";

// Destructure props
function SearchResult({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) {
	return (
		<div className="searchResult">
			<img src={img} alt="" />
			<FavoriteBorderIcon className="searchResult__heart" />
			<div className="searchResult__info">
				<div className="searchResult__infoTop">
					<p>{location}</p>
					<h3>{title}</h3>
					<p>____</p>
					<p>{description}</p>
				</div>
				<div className="searchResult__infoBottom">
					<div className="searchResult__stars">
						<StarIcon className="searchResult__star" />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
					<div className="searchResults__price">
						<h2>{price}</h2>
						<p>{total}</p>
					</div>
				</div>
			</div>
			<div className=''>
			<Map/>
			</div>
		</div>
	);
}

export default SearchResult;
