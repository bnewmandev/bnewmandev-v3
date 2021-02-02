const Header = (active) => {
	const isActive = active.active.active;
	return (
		<header>
			<div id="heading">
				<img src="https://bnewman.dev/assets/logo.png" alt="BNewman.dev" />
				<h1>BNewman.Dev</h1>
				<button className={`${isActive.home ? "ORANGEBGCOL" : ""}`} id="homeL">
					Home
				</button>
				<button
					className={`${isActive.aboutme ? "ORANGEBGCOL" : ""}`}
					id="aboutMeL"
				>
					About Me
				</button>
				<button id="myPlansL">My Plans</button>
				<button id="myProjectsL">My Projects</button>
				<button id="linksL">Links</button>
				<button id="contactMeL">Contact Me</button>
			</div>
		</header>
	);
};

export default Header;
