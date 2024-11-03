import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Active Participant in Events",
      description: "I am an enthusiastic individual who thrives in collaborative environments, actively engaging in various events"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "pursuing Bachelor's",
      description: "exploring the latest advancements in technology and their applications in cybersecurity."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Collaborative Team Player",
      description: "I am an engaging individual with exceptional teamwork and coordination skills, fostering positive relationships and camaraderie among colleagues."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="lg:w-1/2 flex items-center justify-center"
>
  <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 animate-pulse" />
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQFQ6kBL555_GQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708233175363?e=2147483647&v=beta&t=F_Ch1W7gI3n57L79yKOzpTyuo7l4RUnPOO9b7I0fPeo"
      alt="Profile"
      className="absolute inset-0 rounded-full w-full h-full object-cover"
    />
  </div>
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-gray-300 text-lg mb-6">
            I am a dedicated computer science student with a keen interest in technology and a passion for learning. My journey is fueled by curiosity and a desire to create innovative solutions that address real-world challenges.
            </p>
            <p className="text-gray-300 text-lg">
            With a solid foundation in software development, I am eager to explore the field of cybersecurity. I strive to think creatively, allowing me to approach problems from unique angles and develop effective solutions. My passion for technology drives my commitment to learning and applying cybersecurity principles to create secure and innovative applications that address real-world challenges.
            </p>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Interests Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Interests
            </h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
                Beyond coding, I'm passionate about exploring new technologies, contributing to open-source projects,
                and mentoring aspiring developers. I believe in continuous learning and staying updated with the
                latest industry trends and best practices.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;