const HomeSkill = (element) => {
	console.log(element);
	return (
		<a href={element.element.link} id={element.element.id}>
			<h2>{element.element.title}</h2>
			<img src={element.element.image} alt={element.element.title} />
			<p>{element.element.body}</p>
		</a>
	);
};
export default HomeSkill;
