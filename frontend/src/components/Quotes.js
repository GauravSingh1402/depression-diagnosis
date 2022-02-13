import React from "react";
import Slide from "./Slide";
import Arrows from "./Arrow";
import Dots from "./Dots";
import "./Quotes.css";

function Quotes() {
	const quotes = [
		"Nothing is impossible. The word itself says 'I'm possible!",
		"The bad news is time flies. The good news is you\re the pilot.",
		"Spread love everywhere you go",
		"It is during our darkest moments that we must focus to see the light",
		"Try to be a rainbow in someone's cloud",
		"Nobody built like you, you design yourself",
		"Out of the mountain of despair, a stone of hope",
		"You are never too old to set another goal or to dream a new dream.",
		"Embrace the glorious mess that you are.",
		"Never bend your head. Always hold it high. Look the world straight in the eye",
	];
	// const quotes = [
	// 	{
	// 		quote:
	// 			"I love you the more in that I believe you had liked me for my own sake and for nothing else",
	// 		author: "John Keats",
	// 	},
	// 	{
	// 		quote: "I have not failed. I've just found 10,000 ways that won't work.",
	// 		author: "Thomas A. Edison",
	// 	},
	// 	{
	// 		quote:
	// 			"But man is not made for defeat. A man can be destroyed but not defeated.",
	// 		author: "Ernest Hemingway",
	// 	},
	// 	{
	// 		quote:
	// 			"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
	// 		author: "Albert Einstein",
	// 	},
	// 	{
	// 		quote:
	// 			"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
	// 		author: "Jane Austen",
	// 	},
	// ];
	const [quoteData, getQuoteData] = React.useState(quotes);
	const [current, setCurrent] = React.useState(0);
	const [quote, getQuote] = React.useState(quoteData[current]);

	React.useEffect(() => getQuote(quoteData[current]), [current, quote]);

	const nextQuote = () => {
		current === quoteData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
	};

	const prevQuote = () => {
		current === 0 ? setCurrent(quoteData.length - 1) : setCurrent(current - 1);
	};

	const dotPicksQuote = (e) => setCurrent(Number(e.target.id));

	console.log(current);
	return (
		<section>
			<div className="slideshow-container">
				<Slide quote={quote} />
				<Arrows nextQuote={nextQuote} prevQuote={prevQuote} />
			</div>
			<Dots
				dotQty={quoteData}
				current={current}
				dotPicksQuote={dotPicksQuote}
			/>
		</section>
	);
}

export default Quotes;
