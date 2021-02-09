import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ContactMe = (active) => {
	return (
		<div id="links">
			<Header active={active} />
			<h1 className="MAINHEADING">Contact Me</h1>
			<Footer />
		</div>
	);
};
export default ContactMe;
