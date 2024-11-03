import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCategory = ({ name, isActive, onClick }: SkillCategoryProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {name}
    </motion.button>
  );
};

export default SkillCategory;