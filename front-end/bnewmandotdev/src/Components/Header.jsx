const Header = (active) => {
	const isActive = active.active;

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
