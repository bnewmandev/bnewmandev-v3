import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { MobileView } from "react-device-detect";
import queryString from "query-string";

const ContactMe = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: true,
	};
	const url = window.location.search;
	const params = queryString.parse(url);
	console.log(params);
	if ("success" in params) {
		if (params.success === "true") {
			alert("Email Sent Successfully");
		} else {
			alert("Error in sending email");
		}
	}
	return (
		<div id="contactme">
			<Header active={active} />
			<main>
				<h1 className="MAINHEADING">Contact Me</h1>
				<h2>
					For any business enquiries or any other feedback or questions please
					contact me directly or use the contact form:
				</h2>
				<form action="/contactme" id="contact-form" method="post">
					<fieldset>
						<label htmlFor="name">Name*</label>
						<input
							id="name"
							name="name"
							placeholder="John Smith"
							type="text"
							required
						/>
						<label htmlFor="email">Email*</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="john.smith@example.com"
							required
						/>
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							placeholder="+44 20 7946 0879"
							name="phone"
							id="phone"
						/>
						<label htmlFor="msg">Message*</label>
						<textarea
							name="msg"
							id="msg"
							rows="10"
							placeholder="Message"
							required
						></textarea>
						<p>* indicates required fields</p>
						<button type="submit">Submit</button>
					</fieldset>
				</form>
				<h3>Email: ben@bnewman.dev</h3>
				<h3>Phone: +44 7860 241605</h3>

				<MobileView>
					<br />
					<h3>
						<a href="mailto:ben@bnewman.dev">Email</a>
					</h3>
					<h3>
						<a href="tel:+4407860241605">Call</a>
					</h3>
					<h3>
						<a href="sms:+4407860241605">SMS</a>
					</h3>
				</MobileView>
			</main>
			<Footer />
		</div>
	);
};
export default ContactMe;
