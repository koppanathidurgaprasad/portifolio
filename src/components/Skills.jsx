function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Python",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "AWS (EC2, S3, RDS)",
    "SQL",
    "MySQL",
    "Git",
    "GitHub",
    "REST APIs",
    "Jupyter Notebook",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
          Technologies and tools that I use to build scalable web
          applications, cloud solutions and AI-powered projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-700 rounded-3xl p-8 flex items-center justify-center text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;