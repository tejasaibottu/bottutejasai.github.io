import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  description: string;
  image: string; // Change the icon prop to accept an image source URL
}

const SkillCard = ({ name, level, description, image }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-blue-400">
            {level}%
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>

        <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
