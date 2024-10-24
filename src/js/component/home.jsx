import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const cards = [{
	image: "https://picsum.photos/id/10/200/300",
	title: "Parque",
	description: "Parque con lindo paisaje",
},
{
	image: "https://picsum.photos/id/17/200/300",
	title: "Sendero",
	description: "Sendero con lindo paisaje",
},
{
	image: "https://picsum.photos/id/28/200/300",
	title: "Bosque",
	description: "Bosque con lindo paisaje",
},
{
	image: "https://picsum.photos/id/37/200/300",
	title: "Costa",
	description: "Costa con lindo paisaje",
}]


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div>
				{cards.map((item, index) => (<Card key={index} cards={item} />))}
			</div>
		</div >
	);
};

export default Home;
