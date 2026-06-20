import profilePhoto from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <p className="inline-block bg-dark-card border border-dark-border text-accent-light text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-5">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Hi, I'm <span className="text-accent">Tusharakanta Chintada</span>
          </h1>

          <h2 className="text-lg sm:text-xl text-slate-300 font-semibold mb-5">
            Web Developer | AI Enthusiast
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            2nd Year Metallurgy and Materials Engineering student at NIT
            Rourkela. I enjoy building web applications and exploring how AI
            can make them smarter — learning by building real projects, one
            bug at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-dark-border hover:border-accent text-slate-200 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Avatar / Visual */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl bg-dark-card border border-dark-border overflow-hidden shadow-lg shadow-accent/10">
              <img
                src={profilePhoto}
                alt="Tusharakanta Chintada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-dark-card border border-dark-border rounded-xl px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 shadow-md">
              📍 NIT Rourkela
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
