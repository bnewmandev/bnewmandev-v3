import ArticleObject from "../Components/ArticleObject";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import data from "../data.json";

const MyProjects = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: true,
		links: false,
		contactme: false,
	};
	return (
		<div className="primaryPage" id="myprojects">
			<Header active={active} />
			<h1 className="MAINHEADING">My Projects</h1>
			<main>
				{data.projects.map((element) => (
					<ArticleObject element={element} key={element.id} />
				))}
			</main>
			<Footer />
		</div>
	);
};
export default MyProjects;
