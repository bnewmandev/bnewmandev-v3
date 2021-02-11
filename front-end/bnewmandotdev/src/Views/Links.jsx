import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Link from "../Components/Link";

const Links = () => {
	const data = [
		{
			link: "https://www.facebook.com/profile.php?id=100057371245350",
			alt: "Facebook Logo",
			img: "https://bnewmandev.b-cdn.net/facebook.png",
		},
		{
			link: "https://twitter.com/dev_newman",
			alt: "Twitter Logo",
			img: "https://bnewmandev.b-cdn.net/twitter.png",
		},
		{
			link: "https://www.linkedin.com/in/benjamin-s-newman/",
			alt: "LinkedIn Logo",
			img: "https://bnewmandev.b-cdn.net/linkedin.png",
		},
		{
			link: "https://github.com/jam1nb3n",
			alt: "Github Logo",
			img: "https://bnewmandev.b-cdn.net/github.png",
		},
	];

	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: true,
		contactme: false,
	};
	return (
		<div id="links">
			<Header active={active} />
			<h1 className="MAINHEADING">Links</h1>
			<main>
				{data.map((element) => (
					<Link data={element} />
				))}
			</main>
			<Footer />
		</div>
	);
};
export default Links;
