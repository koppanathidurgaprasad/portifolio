import profileImg from "../assets/images/profile.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-cyan-400 text-xl md:text-2xl font-semibold mb-5">
              Hello 👋 I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
              Koppanathi
              <br />
              <span className="text-white">
                Durga Prasad
              </span>
            </h1>

            <div className="mt-8 h-16 flex items-center">
              <span className="text-2xl md:text-4xl font-bold text-cyan-400">

                <Typewriter
                  words={[
                    "Java Full Stack Developer",
                    "Spring Boot Developer",
                    "React Developer",
                    "AWS Cloud Learner",
                    "AI / ML Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />

              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              Java Full Stack Developer with hands-on experience
              building responsive web applications, AI-powered
              solutions and cloud-based software using Java,
              Spring Boot, React, SQL, Python and AWS.
              Passionate about solving real-world problems and
              continuously learning modern technologies.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="/KOPPANATHI_DURGA_PRASAD_FlowCV_Resume_2026-07-11.pdf"
                download
                className="flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <Link
                to="projects"
                smooth
                duration={600}
                offset={-70}
                className="cursor-pointer rounded-full border-2 border-cyan-400 px-8 py-4 text-lg font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                View Projects
              </Link>

            </div>

            <div className="mt-12 flex items-center gap-6">

              <a
                href="https://github.com/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/koppanathidurgaprasad"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>
                    <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[120px] opacity-25"></div>

              <motion.img
                src={profileImg}
                alt="Koppanathi Durga Prasad"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-[340px] w-[340px] rounded-full border-[6px] border-cyan-400 object-cover shadow-[0_0_80px_rgba(34,211,238,0.45)] md:h-[430px] md:w-[430px] lg:h-[500px] lg:w-[500px]"
              />

            </div>
          </motion.div>

        </div>

      </div>

      <Link
        to="about"
        smooth
        duration={600}
        offset={-70}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-4xl text-cyan-400 animate-bounce"
      >
        <FaArrowDown />
      </Link>

    </section>
  );
}

export default Hero;