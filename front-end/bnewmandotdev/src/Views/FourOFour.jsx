import Footer from "../Components/Footer";
import Header from "../Components/Header";

const FourOFour = (active) => {
	return (
		<div className="primaryPage" id="404">
			<Header active={active} />
			<main>
				<h1 id="error-msg">Error 404 Page not found</h1>
			</main>
			<Footer />
		</div>
	);
};
export default FourOFour;
