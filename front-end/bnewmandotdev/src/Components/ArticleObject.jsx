const ArticleObject = (element) => {
	return (
		<article>
			<h2>{element.element.title}</h2>
			<p>{element.element.body}</p>
		</article>
	);
};

export default ArticleObject;
