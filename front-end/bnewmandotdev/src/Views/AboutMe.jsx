import AboutMeMain from "../Components/AboutMeMain";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutMe = (active) => {
	return (
		<div id="aboutme">
			<Header active={active} />
			<AboutMeMain />
			<Footer />
		</div>
	);
};

export default AboutMe;
