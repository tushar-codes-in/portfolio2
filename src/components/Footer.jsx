const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border py-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm text-center sm:text-left">
          © {year} Tusharakanta Chintada. Built with React & Tailwind CSS.
        </p>

        <div className="flex gap-5 text-sm">
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="text-slate-400 hover:text-accent transition-colors duration-200"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
