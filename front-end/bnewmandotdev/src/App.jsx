import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import FourOFour from "./Views/FourOFour";
import AboutMe from "./Views/AboutMe";
import MyPlans from "./Views/MyPlans";
import MyProjects from "./Views/MyProjects";
import Links from "./Views/Links";
import ContactMe from "./Views/ContactMe";
import PUC from "./Views/PUC";
import Services from "./Views/Services";

const App = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: false,
		services: false,
	};
	return (
		<main>
			<Switch>
				<Route path="/" component={() => <Home active={active} />} exact />
				<Route path="/home" component={() => <Home active={active} />} />
				<Route path="/aboutme" component={() => <AboutMe active={AboutMe} />} />
				<Route path="/myplans" component={() => <MyPlans active={MyPlans} />} />
				<Route
					path="/myprojects"
					component={() => <MyProjects active={MyProjects} />}
				/>
				<Route
					path="/services"
					component={() => <Services active={Services} />}
				/>
				<Route path="/links" component={() => <Links active={Links} />} />
				<Route
					path="/contactme"
					component={() => <ContactMe active={ContactMe} />}
				/>
				<Route path="/puc" component={() => <PUC active={PUC} />} />
				<Route path="/" component={FourOFour} />
			</Switch>
		</main>
	);
};

export default App;
