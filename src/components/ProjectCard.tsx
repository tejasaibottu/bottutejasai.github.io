import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail as MailIcon, Instagram, Linkedin } from 'lucide-react'; // Correct import for LinkedIn

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  Mailurl?: string; // Optional mail URL
  instagramUrl?: string; // Optional Instagram URL
  linkedinUrl?: string; // Optional LinkedIn URL
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  technologies,
  liveUrl,
  githubUrl,
  Mailurl,
  instagramUrl,
  linkedinUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-blue-300 px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </motion.a>
          )}
          {/* Mail icon link */}
          {Mailurl && (
            <a href={`mailto:${Mailurl}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <MailIcon className="h-5 w-5 text-white" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" /> {/* Correct usage of LinkedIn icon */}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
