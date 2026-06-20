import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Note: this is a frontend-only demo, so we just show a success message.
    // In a real app this would be connected to a backend or an email service.
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-5 sm:px-8 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Have a project idea, an opportunity, or just want to say hi? My
            inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 h-fit">
            <h3 className="text-white font-semibold mb-5">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-accent">📧</span>
                tusharakanta.chintada@example.com
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-accent">📍</span>
                NIT Rourkela, Odisha, India
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-accent">🎓</span>
                Metallurgy & Materials Engg.
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="border border-dark-border hover:border-accent hover:text-accent text-slate-300 text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="#"
                className="border border-dark-border hover:border-accent hover:text-accent text-slate-300 text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-400 mb-1.5"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-400 mb-1.5"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your project or just say hello!"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-accent-light text-sm text-center pt-1">
                ✅ Thanks! Your message has been noted (demo form).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
