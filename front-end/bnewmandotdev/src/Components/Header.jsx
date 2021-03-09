const Header = () => {
	const path = window.location.pathname;
	let isActive = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		services: false,
		blog: false,
		links: false,
		contactme: false,
	};
	switch (path) {
		case "/home":
			isActive.home = true;
			break;
		case "/":
			isActive.home = true;
			break;
		case "/aboutme":
			isActive.aboutme = true;
			break;
		case "/myplans":
			isActive.myplans = true;
			break;
		case "/myprojects":
			isActive.myprojects = true;
			break;
		case "/services":
			isActive.services = true;
			break;
		case "/links":
			isActive.links = true;
			break;
		case "/contactme":
			isActive.contactme = true;
			break;
		default:
			break;
	}
	return (
		<header>
			<div id="heading">
				<img
					src="https://bnewmandev.b-cdn.net/logos/logo.png"
					alt="BNewman.dev"
				/>
				<h1>BNewman.Dev</h1>
				<a
					href="/home"
					className={`${isActive.home ? "ORANGEBGCOL" : ""}`}
					id="homeL"
				>
					Home
				</a>
				<a
					href="/aboutme"
					className={`${isActive.aboutme ? "ORANGEBGCOL" : ""}`}
					id="aboutMeL"
				>
					About Me
				</a>
				<a
					href="/myplans"
					id="myPlansL"
					className={`${isActive.myplans ? "ORANGEBGCOL" : ""}`}
				>
					My Plans
				</a>
				<a
					href="/myprojects"
					id="myProjectsL"
					className={`${isActive.myprojects ? "ORANGEBGCOL" : ""}`}
				>
					Projects
				</a>
				<a
					href="/services"
					id="servicesL"
					className={`${isActive.services ? "ORANGEBGCOL" : ""}`}
				>
					Services
				</a>
				<a
					href="/links"
					id="linksL"
					className={`${isActive.links ? "ORANGEBGCOL" : ""}`}
				>
					Links
				</a>
				<a
					href="/contactme"
					id="contactMeL"
					className={`${isActive.contactme ? "ORANGEBGCOL" : ""}`}
				>
					Contact
				</a>
			</div>
		</header>
	);
};

export default Header;
