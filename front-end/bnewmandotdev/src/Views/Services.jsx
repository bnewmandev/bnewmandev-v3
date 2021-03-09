import ArticleObject from "../Components/ArticleObject";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import data from "../data.json";

const Services = (active) => {
	return (
		<div className="primaryPage" id="services">
			<Header active={active} />
			<h1 className="MAINHEADING">Services</h1>
			<main>
				{data.services.map((element) => (
					<ArticleObject element={element} key={element.id} />
				))}
			</main>
			<Footer />
		</div>
	);
};

export default Services;
