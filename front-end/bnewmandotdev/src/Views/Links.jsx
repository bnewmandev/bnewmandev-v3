import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Links = (active) => {
	return (
		<div id="links">
			<Header active={active} />
			<h1 className="MAINHEADING">Links</h1>
			<Footer />
		</div>
	);
};
export default Links;
