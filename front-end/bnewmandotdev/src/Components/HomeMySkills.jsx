import HomeSkill from "./HomeSkill";
import data from "../data.json";
const HomeMySkills = () => {
	const skills = data.skills;
	const learning = data.learning;
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
