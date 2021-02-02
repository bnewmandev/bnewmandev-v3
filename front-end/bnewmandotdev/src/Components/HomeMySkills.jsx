import HomeSkill from "./HomeSkill";

const HomeMySkills = () => {
	const skills = [
		{
			title: "test1",
			image: "https://via.placeholder.com/135x135.png",
			body: "test1",
			link: "http://www.google.com",
			id: "123",
		},
		{
			title: "test1",
			image: "https://via.placeholder.com/135x135.png",
			body: "test1",
			link: "http://www.google.com",
			id: "12",
		},
	];
	const learning = [
		{
			title: "test1",
			image: "https://via.placeholder.com/135x135.png",
			body: "test1",
			link: "http://www.google.com",
			id: "123",
		},
		{
			title: "test1",
			image: "https://via.placeholder.com/135x135.png",
			body: "test1",
			link: "http://www.google.com",
			id: "12",
		},
	];
	return (
		<div id="HomeMySkills">
			<h1>My Skills</h1>
			<div className="HomeMySkillsWrapper">
				{skills.map((element) => (
					<HomeSkill element={element} key={element.id} />
				))}
			</div>
			<h1>Currently Learning</h1>
			<div className="HomeMySkillsWrapper">
				{learning.map((element) => (
					<HomeSkill element={element} key={element.id} />
				))}
			</div>
		</div>
	);
};

export default HomeMySkills;
