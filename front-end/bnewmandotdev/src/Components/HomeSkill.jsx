const HomeSkill = (element) => {
	var firstClick = false;
	var elem = null;
	const toggleDisplay = (e) => {
		if (firstClick === false) {
			let objectType = e.target.nodeName;
			let button = null;
			if (objectType !== "BUTTON") {
				button = e.target.parentElement;
			} else {
				button = e.target;
			}
			let overlay = button.childNodes[3];

			if (overlay.style.display === "none") {
				overlay.style.display = "none";
			} else {
				overlay.style.display = "block";
			}
			firstClick = true;
			elem = overlay;
		} else {
			if (elem.style.display === "none") {
				elem.style.display = "block";
			} else {
				elem.style.display = "none";
			}
		}
	};
	return (
		<button id={element.element.id + "BUTTON"} onClick={toggleDisplay}>
			<h2>{element.element.title}</h2>
			<img src={element.element.image} alt={element.element.title} />
			<p>{element.element.body}</p>
			<div id={element.element.id + "OVERLAY"} className="MINOR-OVERLAY">
				{/* {console.log(element.element.id + "OVERLAY")} */}
				{element.element.eg.map((element) => (
					<div key={element.id}>
						<br />
						<h1>{element.heading}</h1>
						<p>{element.body}</p>
						<br />
					</div>
				))}
			</div>
		</button>
	);
};
export default HomeSkill;
