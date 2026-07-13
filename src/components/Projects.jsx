import skinDisease from "../assets/projects/skin-disease.jpg";
import awsBoto3 from "../assets/projects/aws-boto3.jpg";
import examAI from "../assets/projects/examai.jpg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Real-Time Skin Disease Detection",
      image: skinDisease,
      description:
        "AI-powered web application that detects skin diseases from uploaded images using CNN and VGG19 deep learning models. Built with a responsive interface for real-time disease prediction.",
      tech: [
        "Python",
        "TensorFlow",
        "CNN",
        "VGG19",
        "Django",
        "OpenCV",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "AWS Automation with Boto3",
      image: awsBoto3,
      description:
        "Automated AWS cloud services using Python Boto3 including EC2, S3, IAM and RDS management. Simplified cloud administration through reusable automation scripts.",
      tech: [
        "Python",
        "AWS",
        "Boto3",
        "EC2",
        "S3",
        "IAM",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "ExamAI - AI Based Online Examination System",
      image: examAI,
      description:
        "An intelligent online examination platform with secure authentication, AI-powered evaluation, online tests, result analytics and performance tracking.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AI",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
          Some of the major projects that showcase my knowledge in Full Stack
          Development, Cloud Computing and Artificial Intelligence.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 flex flex-col"
            >

              <div className="overflow-hidden h-56">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-7 flex flex-col flex-1">

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 py-3 rounded-xl transition font-semibold"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 py-3 rounded-xl transition font-semibold"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;