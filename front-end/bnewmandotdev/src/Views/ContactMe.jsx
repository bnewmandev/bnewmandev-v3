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
					For any business enquiries or any other feedback or questions please
					contact me at (email is preferred):
				</h2>
				<h3>
					<a href="mailto:ben@bnewman.dev">Email: ben@bnewman.dev</a>
				</h3>
				<h3>Phone: +44 7860 241605</h3>
			</main>
			<Footer />
		</div>
	);
};
export default ContactMe;
