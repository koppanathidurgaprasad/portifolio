import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
          I'm currently looking for Java Full Stack Developer, Software Engineer
          and AI/ML opportunities. Feel free to contact me for internships,
          full-time roles or collaborations.
        </p>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <div className="space-y-6">

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  Email
                </h3>

                <a
                  href="mailto:durgaprasadk1134@gmail.com"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  durgaprasadk1134@gmail.com
                </a>
              </div>

            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  Phone
                </h3>

                <a
                  href="tel:+919666774246"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  +91 9666774246
                </a>
              </div>

            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  Location
                </h3>

                <p className="text-gray-300">
                  Bengaluru, Karnataka, India
                </p>
              </div>

            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none resize-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;