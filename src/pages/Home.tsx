import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Header */}
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Welcoming you
</span>
<br />
<span className="bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text text-transparent inline-block">
    &amp;
</span>
<br />
<span className="bg-gradient-to-r from-blue-100 to-blue-100 bg-clip-text text-transparent inline-block">
Explore me
</span>

        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          In pursuit of a journey to strengthen digital resilience
        </motion.p>

        {/* Animated Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Github className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Mail className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </div>
  );
};

export default Home;
