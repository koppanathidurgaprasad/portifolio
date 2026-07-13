import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

        <Link
          to="home"
          smooth
          duration={600}
          offset={-70}
          className="cursor-pointer"
        >
          <h1 className="text-2xl lg:text-3xl font-bold tracking-wide text-cyan-400">
            Durga Prasad
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-[17px] font-medium text-gray-300">

          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth
                spy
                duration={600}
                offset={-70}
                activeClass="text-cyan-400"
                className="cursor-pointer transition hover:text-cyan-400"
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="/KOPPANATHI_DURGA_PRASAD_FlowCV_Resume_2026-07-11.pdf"
            download
            className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-5 border-b border-slate-800 text-gray-300 hover:text-cyan-400 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/KOPPANATHI_DURGA_PRASAD_FlowCV_Resume_2026-07-11.pdf"
            download
            className="flex justify-center items-center gap-2 bg-cyan-400 text-slate-900 py-4 font-semibold"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;