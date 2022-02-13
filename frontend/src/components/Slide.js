import React from "react";
function Slide({ quote }) {
	return (
		<div className="mySlides">
			<q>{quote}</q>
			{/* <p className="author">&mdash;{quote.author}</p> */}
		</div>
	);
}
export default Slide;
