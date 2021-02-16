const HomeSkill = (element) => {
	console.log(element);
	const toggleDisplay = (e) => {
		let target = e.target;
	};
	return (
		<button id={element.element.id} onClick={toggleDisplay}>
			<h2>{element.element.title}</h2>
			<img src={element.element.image} alt={element.element.title} />
			<p>{element.element.body}</p>
			<div id={element.element.id + "OVERLAY"} className="MINOR-OVERLAY">
				{console.log(element.element.id + "OVERLAY")}
				{element.element.eg.map((element) => (
					<div>
						<h1>{element.heading}</h1>
						<p>{element.body}</p>
					</div>
				))}
			</div>
		</button>
	);
};
export default HomeSkill;
