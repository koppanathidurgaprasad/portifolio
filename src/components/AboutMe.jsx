import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLanguage,
  FaUniversity,
  FaUser,
} from "react-icons/fa";

function AboutMe() {
  const details = [
    {
      icon: <FaUser />,
      title: "Full Name",
      value: "Koppanathi Durga Prasad",
    },
    {
      icon: <FaUserGraduate />,
      title: "Degree",
      value: "B.Tech (CSE - AI & ML)",
    },
    {
      icon: <FaUniversity />,
      title: "College",
      value: "Aditya College of Engineering & Technology",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bengaluru, Karnataka",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "durgaprasadk1134@gmail.com",
    },
    {
      icon: <FaLanguage />,
      title: "Languages",
      value: "English, Telugu",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-20">
            Passionate Java Full Stack Developer with strong knowledge in
            Java, Spring Boot, React, SQL, AWS and AI/ML. I enjoy creating
            scalable web applications, solving real-world problems and
            continuously improving my technical skills.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>

              <h3 className="text-3xl font-bold mb-8">
                Who Am I?
              </h3>

              <p className="text-gray-300 text-lg leading-9">
                I'm Koppanathi Durga Prasad, a passionate Java Full Stack
                Developer with a strong interest in backend development,
                frontend design, cloud technologies and Artificial
                Intelligence.
              </p>

              <p className="text-gray-300 text-lg leading-9 mt-8">
                I enjoy building responsive web applications using Java,
                Spring Boot, React, MySQL and AWS. My goal is to become
                a highly skilled Software Engineer and contribute to
                innovative products that solve real-world challenges.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">

                <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
                  <h4 className="text-4xl font-bold text-cyan-400">
                    10+
                  </h4>

                  <p className="text-gray-300 mt-3">
                    Technologies
                  </p>
                </div>

                <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
                  <h4 className="text-4xl font-bold text-cyan-400">
                    3
                  </h4>

                  <p className="text-gray-300 mt-3">
                    Major Projects
                  </p>
                </div>

              </div>

            </div>
                        <div className="grid sm:grid-cols-2 gap-6">

              {details.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-300 leading-7 break-words">
                    {item.value}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutMe;