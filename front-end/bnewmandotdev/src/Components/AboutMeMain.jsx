const AboutMeMain = () => {
	return (
		<div id="aboutMeWrapper">
			<h1 className="MAINHEADING">About Me</h1>
			<main>
				<article>
					<p>
						I am currently reading computer science at university in the UK and
						I have experience working in a broad range of fields such as
						networking, full-stack web development and scripting.
						<br />
						<br />I have had experience working with a team notably in working
						on the API for a food blog website.
						<br />
						<br />I primarily focus on teaching programming in python and
						javascript as well as teaching web development. I also offer data
						analysis using R and a broad range of development solutions.
					</p>
				</article>
				<article>
					<img src="https://bnewmandev.b-cdn.net/ben.jpg" alt="Ben Newman" />
				</article>
			</main>
			<section>
				<article>
					<p>Ben Newman Development</p>
					<p>Beit House</p>
					<p>Sleepers Hill</p>
					<p>Winchester</p>
					<p>SO22 4NF</p>
				</article>
				<div>
					<p>
						Ben Newman Development Limited is a company registered in England
						and Wales with the Company Number 13182000.
					</p>
				</div>
			</section>
		</div>
	);
};

export default AboutMeMain;
