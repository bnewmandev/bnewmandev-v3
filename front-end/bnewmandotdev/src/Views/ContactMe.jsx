import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ContactMe = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: true,
	};
	return (
		<div id="contactme">
			<Header active={active} />
			<main>
				<h1 className="MAINHEADING">Contact Me</h1>
				<h2>
					If you have any questions or feedback, please feel free to contact me.
				</h2>
				<h3>Email: ben@bnewman.dev</h3>
				<h3>Phone: +44 7860 241605</h3>
			</main>
			<Footer />
		</div>
	);
};
export default ContactMe;
