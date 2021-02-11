import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeIntro from "../Components/HomeIntroduction";
import HomeMySkills from "../Components/HomeMySkills";

const Home = () => {
	let active = {
		home: true,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: false,
	};
	return (
		<div id="home">
			<Header active={active} />
			<HomeIntro />
			<HomeMySkills />
			<Footer />
		</div>
	);
};
export default Home;
