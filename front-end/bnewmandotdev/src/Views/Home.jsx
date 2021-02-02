import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeIntro from "../Components/HomeIntroduction";
import HomeMySkills from "../Components/HomeMySkills";

const Home = () => {
	return (
		<div id="home">
			<Header />
			<HomeIntro />
			<HomeMySkills />
			<Footer />
		</div>
	);
};
export default Home;
