import Home from "./Views/Home";
import FourOFour from "./Views/FourOFour";
import AboutMe from "./Views/AboutMe";

const App = () => {
	const active = {
		home: false,
		aboutme: false,
	};

	switch (window.location.pathname) {
		case "/":
			active.home = true;
			return <Home active={active} />;
		case "/home":
			active.home = true;
			return <Home active={active} />;
		case "/aboutme":
			active.aboutme = true;
			return <AboutMe active={active} />;
		default:
			return <FourOFour />;
	}
};
export default App;
