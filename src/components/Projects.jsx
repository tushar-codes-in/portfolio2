const projects = [
  {
    title: "ReelVault",
    description:
      "A digital product marketplace where users can browse, list, and purchase digital products in a clean and simple interface.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "GitHub Profile Viewer",
    description:
      "Search any GitHub username to view their profile details, public repositories, followers, and other stats using the GitHub REST API.",
    tags: ["React", "GitHub API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio! Built from scratch using React and Tailwind CSS to showcase my projects, skills, and journey as a developer.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A few things I've built while learning and experimenting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Placeholder project thumbnail */}
              <div className="h-32 rounded-xl bg-gradient-to-br from-accent/20 to-dark-border flex items-center justify-center mb-5">
                <span className="text-3xl font-extrabold text-accent-light/80">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-accent-light bg-accent/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-accent transition-colors duration-200"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
