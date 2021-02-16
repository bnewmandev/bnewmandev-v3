import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import FourOFour from "./Views/FourOFour";
import AboutMe from "./Views/AboutMe";
import MyPlans from "./Views/MyPlans";
import MyProjects from "./Views/MyProjects";
import Links from "./Views/Links";
import ContactMe from "./Views/ContactMe";

const App = () => {
	return (
		<main>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/home" component={Home} />
				<Route path="/aboutme" component={AboutMe} />
				<Route path="/myplans" component={MyPlans} />
				<Route path="/myprojects" component={MyProjects} />
				<Route path="/links" component={Links} />
				<Route path="/contactme" component={ContactMe} />
				<Route path="/" component={FourOFour} />
			</Switch>
		</main>
	);
};

export default App;
