import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              Koppanathi Durga Prasad
            </h2>

            <p className="mt-4 text-gray-400 leading-8 max-w-md">
              Java Full Stack Developer passionate about building scalable,
              responsive and modern web applications using Java, Spring Boot,
              React, AWS and AI technologies.
            </p>

          </div>

          <div className="flex flex-col items-center md:items-end">

            <div className="flex gap-5">

              <a
                href="https://github.com/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:durgaprasadk1134@gmail.com"
                className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

            <Link
              to="home"
              smooth
              duration={600}
              className="mt-8 cursor-pointer flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <FaArrowUp />
              Back to Top
            </Link>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Koppanathi Durga Prasad. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Built with React.js & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;