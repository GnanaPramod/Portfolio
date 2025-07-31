import React, { useState } from 'react';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
        {
      title: "Mirror Me – Emotional AI Companion",
      description:
        "Developed an AI-powered web app during the world’s largest hackathon by Bolt using Bolt.new and ChatGPT — with zero-code deployment under the Vibe Coding challenge.Integrated multiple API’s.Mirror Me enables users to emotionally connect with themselves or loved ones through dynamic video responses using Deepseek (tone detection), ElevenLabs (voice cloning), and Tavus/D-ID (face video synthesis).",
      technologies: ["Deepseek", "Eleven Labs","Tavus,Supabse","Bolt.new"],
      period: "July 2025",
      githubUrl: "https://github.com/GnanaPramod/MirrorMe",
      websiteUrl: "https://stalwart-kitsune-2055e7.netlify.app/",
    },
    {
      title: "Concept-Based Explainability in PLMs",
      description:
        "Designed a concept bottleneck-based framework to enhance interpretability in PLMs by inserting a human-interpretable concept layer between embeddings and final predictions. Boosted accuracy to 73.29% in concept prediction and 72.99% in embedding attention.",
      technologies: ["NLP", "Explainable AI", "Python"],
      period: "January 2025–March 2025",
      githubUrl: "https://github.com/GnanaPramod/rationalizing-nerual-predictions",
    },
    {
      title: "Voyages",
      description:
        "Designed and created a web application using the MERN stack that assigns guides to users based on preferences and location. Developed an intuitive booking system and dynamic scheduling system for expert guides.",
      technologies: ["MongoDB", "Express.JS", "React.JS", "Node.js"],
      period: "February 2024–April 2024",
      githubUrl: "https://github.com/proplaza/Voyages_Tour_guide_Project",
    },
    {
      title: "Diabetes Diagnosis",
      description:
        "Engineered a machine learning model for 'DIABETES DIAGNOSIS,' achieving 80.519% accuracy and 0.6808 F1 Score. Tested various algorithms including KSVM, SVM, KNN, LR, Decision Tree, and Random Forest.",
      technologies: ["Machine Learning"],
      period: "June 2023–July 2023",
      githubUrl: "https://github.com/GnanaPramod/Diabetes-Diagnosis",
    },
    {
      title: "Online Crime Reporting System",
      description:
        "Led the creation of an online crime reporting platform that allows users to report crimes. It provides real-time crime statistics and enhances accessibility by 60%. The platform includes advanced filtering and interactive dashboards.",
      technologies: ["HTML", "CSS", "JavaScript", "GIS"],
      period: "February 2023–April 2023",
      githubUrl: "https://github.com/GnanaPramod/CrimeReportingSystem",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 cursor-pointer 
              ${index % 2 === 0
                ? 'bg-white text-black dark:bg-white dark:text-black'
                : 'bg-black text-white dark:bg-black dark:text-white'
              }
              hover:scale-[0.98] active:scale-[0.95]
            `}
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <p className="text-sm mb-4">{project.period}</p>
            {project.githubUrl && (
<div className="flex gap-4">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline font-medium ${
        index % 2 === 0 ? 'text-amber-300 hover:text-amber-400' : 'text-amber-300 hover:text-amber-400'
      }`}
    >
      GitHub
    </a>
  )}
  {project.websiteUrl && (
    <a
      href={project.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline font-medium ${
        index % 2 === 0 ? 'text-amber-300 hover:text-amber-400' : 'text-amber-300 hover:text-amber-400'
      }`}
    >
      Website
    </a>
  )}
</div>

            )}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-slate-500 hover:text-slate-700 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {selectedProject.period}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            {selectedProject.githubUrl && (
              <div className="mt-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
