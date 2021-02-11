const Link = (data) => {
	console.log(data);
	return (
		<a href={data.data.link}>
			<img src={data.data.img} alt={data.data.alt} />
		</a>
	);
};
export default Link;
