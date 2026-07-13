import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      branch: "Computer Science & Engineering (AI & ML)",
      college: "Aditya College of Engineering & Technology",
      year: "2022 - 2026",
      score: "CGPA: 8.0 / 10",
    },
    {
      degree: "Intermediate",
      branch: "MPC",
      college: "Sri Chaitanya Junior College",
      year: "2020 - 2022",
      score: "82.6%",
    },
    {
      degree: "SSC",
      branch: "Secondary School Education",
      college: "SAMA Public School",
      year: "2020",
      score: "89.5%",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
          My academic journey has provided a strong foundation in computer
          science, software development, artificial intelligence and modern
          web technologies.
        </p>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex gap-6">

                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl shrink-0">
                    <FaGraduationCap />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-2 font-medium">
                      {item.branch}
                    </p>

                    <p className="text-gray-300 mt-3 leading-7">
                      {item.college}
                    </p>

                  </div>

                </div>

                <div className="flex flex-col md:items-end gap-3">

                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <FaCalendarAlt />
                    {item.year}
                  </div>

                  <div className="bg-cyan-400/10 text-cyan-400 px-5 py-2 rounded-full font-semibold">
                    {item.score}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;