import Home from "./Views/Home";
import FourOFour from "./Views/FourOFour";
import AboutMe from "./Views/AboutMe";
import MyPlans from "./Views/MyPlans";
import MyProjects from "./Views/MyProjects";
import Links from "./Views/Links";
import ContactMe from "./Views/ContactMe";

const Router = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: false,
	};

	const resetActive = () => {
		active = {
			home: false,
			aboutme: false,
			myplans: false,
			myprojects: false,
			links: false,
			contactme: false,
		};
	};

	switch (window.location.pathname) {
		case "/":
			resetActive();
			active.home = true;
			return <Home active={active} />;
		case "/home":
			resetActive();
			active.home = true;
			return <Home active={active} />;
		case "/aboutme":
			resetActive();
			active.aboutme = true;
			return <AboutMe active={active} />;
		case "/myplans":
			resetActive();
			active.myplans = true;
			return <MyPlans active={active} />;
		case "/myprojects":
			resetActive();
			active.myprojects = true;
			return <MyProjects active={active} />;
		case "/links":
			resetActive();
			active.links = true;
			return <Links active={active} />;
		case "/contactme":
			resetActive();
			active.contactme = true;
			return <ContactMe active={active} />;
		default:
			return <FourOFour />;
	}
};
export default Router;
