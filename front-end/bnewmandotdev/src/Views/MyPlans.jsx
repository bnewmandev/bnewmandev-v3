import ArticleObject from "../Components/ArticleObject";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import data from "../data.json";

const MyPlans = (active) => {
	return (
		<div className="primaryPage" id="myplans">
			<Header active={active} />
			<div id="myplanswrapper">
				<h1 className="MAINHEADING">My Plans</h1>
				<main>
					{data.plans.map((element) => (
						<ArticleObject element={element} key={element.id} />
					))}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default MyPlans;
