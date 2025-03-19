import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 duration-300">
      <img
        src={project.image} // Make sure API includes an 'image' field
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;