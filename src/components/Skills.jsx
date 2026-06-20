const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Vite", "Bootstrap"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    title: "Currently Learning",
    skills: ["Node.js", "MongoDB", "AI/ML Basics"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Still learning and adding to this list every month!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-accent hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-accent-light font-semibold mb-4 text-sm sm:text-base">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
