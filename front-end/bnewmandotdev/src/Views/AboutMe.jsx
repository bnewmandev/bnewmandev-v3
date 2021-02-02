import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutMe = (active) => {
	return (
		<div id="aboutme">
			<Header active={active} />
			<Footer />
		</div>
	);
};

export default AboutMe;
