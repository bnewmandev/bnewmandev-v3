import HomeSkill from "./HomeSkill";
import data from "../data.json";
const HomeMySkills = () => {
	const skills = data.skills;
	return (
		<div id="HomeMySkills">
			<h1>My Skills</h1>
			<div className="HomeMySkillsWrapper">
				{skills.map((element) => (
					<HomeSkill element={element} key={element.id} />
				))}
			</div>
		</div>
	);
};

export default HomeMySkills;
