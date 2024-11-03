import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}  // Slightly enlarge the button on hover
          whileTap={{ scale: 0.95 }}    // Slightly shrink the button on tap
          onClick={() => onCategoryChange(category)}  // Change category on click
          className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-blue-500 text-white'  // Styles for active category
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'  // Styles for inactive categories
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}  {/* Capitalize first letter */}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
