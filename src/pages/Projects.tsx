import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: 'Text Steganography',
      description: 'Unlock hidden data within a plain text file using invisible encryption, where every character conceals a secret.',
      image: 'https://uploads.codehs.com/148a287476c69f81784cf812d9cfda94',
      technologies: ['AHS-256', 'AES-256', 'Zero Width Encoding', 'Dynamic Patterns'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Explore my latest work across various domains of software development and design.
            Each project represents a unique challenge and innovative solution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }} // Scale up on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
