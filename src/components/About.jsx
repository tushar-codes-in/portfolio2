const infoItems = [
  { label: "Name", value: "Tusharakanta Chintada" },
  { label: "College", value: "NIT Rourkela" },
  { label: "Branch", value: "Metallurgy and Materials Engineering" },
  { label: "Year", value: "2nd Year" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A quick look at who I am and what I'm learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* About paragraph */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors duration-200">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I'm Tusharakanta, currently in my 2nd year of Metallurgy and
              Materials Engineering at NIT Rourkela. Even though my branch
              isn't core CS, I've been teaching myself web development and
              exploring AI tools on the side because I genuinely enjoy
              building things that work.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              I started with HTML/CSS, moved on to JavaScript, and now I'm
              comfortable building projects using React and Tailwind CSS.
              I'm also curious about how AI can be integrated into everyday
              apps, and I'm slowly diving deeper into that space.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              When I'm not coding, you'll probably find me reading about new
              tech, sketching out project ideas, or debugging something at 1
              AM.
            </p>
          </div>

          {/* Info card */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors duration-200">
            <h3 className="text-white font-semibold mb-5 text-base sm:text-lg">
              Quick Info
            </h3>
            <ul className="space-y-4">
              {infoItems.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-dark-border pb-3 last:border-none last:pb-0"
                >
                  <span className="text-slate-500 text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
