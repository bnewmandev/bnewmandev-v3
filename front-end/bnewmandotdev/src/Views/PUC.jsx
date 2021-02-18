import Header from "../Components/Header";

const PUC = () => {
	let active = {
		home: false,
		aboutme: false,
		myplans: false,
		myprojects: false,
		links: false,
		contactme: false,
	};
	return (
		<div id="PUC">
			<Header active={active} />
			<article>
				<h1>This Page / Feature is currently under construction</h1>
			</article>
		</div>
	);
};

export default PUC;
