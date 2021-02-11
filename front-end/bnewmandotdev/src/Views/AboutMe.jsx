import AboutMeMain from "../Components/AboutMeMain";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutMe = () => {
	let active = {
		home: false,
		aboutme: true,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: false,
	};
	return (
		<div id="aboutme">
			<Header active={active} />
			<AboutMeMain />
			<Footer />
		</div>
	);
};

export default AboutMe;
