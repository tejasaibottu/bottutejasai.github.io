import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import CategoryFilter from '../components/CategoryFilter';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const categories = ['github', 'linkedin', 'mail', 'instagram']; // Removed 'All' category
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category

  const projects = [
    {
      title: 'Github',
      description: 'Explore my projects showcased on GitHub, where I share code, ideas, and collaborations.',
      image: 'https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png',
      category: 'github',
      technologies: ['projects', 'ideas', 'work'],
      githubUrl: 'https://github.com/example',
    },
    {
      title: 'LinkedIn',
      description: 'Feel free to explore my LinkedIn profile to discover more about my professional background and experiences.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQEN2KHlPIrbqg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687242865176?e=2147483647&v=beta&t=ZJcBezHVlLlAXSuS5Jd9YdNfWpLfBmgsFq8VTyFDVLo',
      category: 'linkedin',
      technologies: ['Networking', 'Professionalism', 'Opportunities'],
      linkedinUrl: 'https://github.com/example',
    },
    {
      title: 'Mail',
      description: "For any inquiries or discussions, please don't hesitate to reach out via email. I look forward to your message.",
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?size=690:388',
      category: 'mail',
      technologies: ['Communication', 'Correspondence', 'Convenience'],
      mailUrl: "mailto:bottutejasai@gmail.com", // Corrected mail URL
    },
    {
      title: 'Instagram',
      description: 'Feel free to connect with me on Instagram to see my latest updates and creative endeavors. I welcome your interactions!',
      image: 'https://helios-i.mashable.com/imagery/articles/044e8x59C0ICkJYCjzRv7Yt/hero-image.fill.size_1248x702.v1650318899.png',
      category: 'instagram',
      technologies: ['Visuals', 'Engagement'],
      instagramUrl: 'https://github.com/example',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Animated Header Section */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              CONTACT
            </span>
            <br />
            <span className="text-white">ME</span>
          </motion.h1>
        </div>

        {/* Animated Description Section */}
        <AnimatedSection delay={0.4}>
          <p className="text-gray-300 text-center mb-1 max-w-2xl mx-auto">
            Ready to connect? I'm just a message away for any inquiries or collaboration ideas.
          </p>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Let’s spark a conversation!
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.6}>
          <div className="flex justify-center mb-8"> {/* Centering the filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </AnimatedSection>

        {/* Animated Project Cards Section */}
        <AnimatedSection delay={0.8}>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" // Centering the grid items
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center" // Centering each project card
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
