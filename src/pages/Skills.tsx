import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import SkillCategory from '../components/SkillCategory';
import AnimatedSection from '../components/AnimatedSection';

const Skills = () => {
  const categories = ['All', 'Programing', 'Cyber security'];
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = {
    Programing: [
      {
        name: 'Python',
        level: 50,
        description: 'Python is a versatile programming language that empowers cybersecurity and networking professionals by automating tasks, analyzing data, and enhancing security protocols.',
        image:"https://i.pinimg.com/564x/a5/86/b0/a586b0bd2e3373ea0870ff06834191f1.jpg"
      },
      
    ],
    "Cyber security": [
      {
        name: 'Networking',
        level: 40,
        description: 'Networking is the backbone of modern IT, enabling seamless communication and data exchange across diverse systems data integrity across digital landscapes.',
        image:"https://img.freepik.com/free-vector/digital-transformation-network-background_53876-117191.jpg?t=st=1730646763~exp=1730650363~hmac=7dccf9ad358c07e0c4501c3f6be17de404c3a0a4b03390d14071311622eadde8&w=996"
      },

    ],
  };

  const filteredSkills = activeCategory === 'All'
    ? Object.values(skills).flat()
    : skills[activeCategory as keyof typeof skills] || [];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
            Each skill represents years of practical experience and continuous learning.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <SkillCategory
                key={category}
                name={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;