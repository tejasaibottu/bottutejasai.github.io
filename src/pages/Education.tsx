import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  FileText,
  Users,
  Download,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface Education {
  id: number;
  years: string;
  institution: string;
  degree: string;
  logo: string;
  description: string;
  gpa: string; 
  courses: string[];
  projects?: Array<{
    title?: string;
    description?: string;
    link?: string;
  }>;
  achievements?: string[];
  papers?: Array<{
    title: string;
    abstract: string;
    link: string;
  }>;
}

const educationData: Education[] = [
  {
    id: 1,
    years: '2022',
    institution: 'Narayana School',
    degree: '10th SSC (Secondary School Certificate)',
    logo: 'https://images.jdmagicbox.com/v2/comp/hyderabad/g8/040pxx40.xx40.130305112720.e6g8/catalogue/narayana-residential-junior-college-for-girls-uppal-hyderabad-colleges-8imkoyemth.jpg',
    description: 'I developed a strong foundation in core subjects and critical thinking skills through comprehensive coursework.',
    gpa: '10/10',
    courses: [
      'Mathematics',
      'Science',
      'English',
      'Social Studies',
    ],
    projects: [
      {
        title: 'Active Participant',
        description: 'Consistently engaged in classroom discussions and activities, demonstrating enthusiasm and a proactive approach to learning.',
      },
      {
        title: 'Leadership Roles',
        description: 'Served as a class representative or participated in organizing school events, showcasing leadership skills and teamwork.',
      },
    ],
  },
  {
    id: 2,
    years: '2020 - 2022',
    institution: 'Narayana Jr College',
    degree: 'Intermediate',
    logo: 'https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/313177941_106184772298338_2380711815961400498_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hVdWFin90EAQ7kNvgGAjMiB&_nc_zt=23&_nc_ht=scontent-maa2-2.xx&_nc_gid=AKF8NBJkhmcxnEp2U6Ua8oG&oh=00_AYDOwUjZVTptfokI9egPs7fx7f3IEKv06iqHKjsFWxiLCQ&oe=672CDC1F',
    description: 'In my intermediate education, I further developed my analytical skills.',
    gpa: '6.0/10.0',
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
    ],
  },
  {
    id: 3,
    years: '2022 - Present',
    institution: 'Velagapudi Ramakrishna Siddhartha Engineering College',
    degree: 'Bachelor of Technology in Information Technology',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQHE7eGxafJ_iA/company-logo_200_200/company-logo_200_200/0/1630590319429/velagapudi_ramakrishna_siddhartha_engineering_college_logo?e=2147483647&v=beta&t=oirUJnfre2T8-5hVXZ7kl0gl4mWTH72sreCIGy0fObQ',
    description: 'Foundation in computer science and engineering principles.',
    gpa: '6.68/10.0',
    courses: [
      'Data Structures and Algorithms',
      'Computer Architecture',
      'Software Engineering',
      'Database Systems',
    ],
    projects: [
      {
        title: 'text steganography',
        description: 'Text steganography is the practice of concealing secret information within a text file',
        link: 'https://example.com/project2',
      },
    ],
    achievements: [
    ],
  },
];

const Education = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null); // New state for hover

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Education & Achievements
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            My academic journey and achievements in the field of computer science and technology.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-transparent" />

          {/* Education Timeline */}
          {educationData.map((edu, index) => (
            <AnimatedSection key={edu.id} delay={index * 0.2}>
              <motion.div
                className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'
                  }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-0 md:top-6 left-0 md:left-0 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"
                  style={{
                    left: index % 2 === 0 ? '-8px' : 'auto',
                    right: index % 2 === 1 ? '-8px' : 'auto',
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => {
                    if (edu.id === 3) setHoveredId(edu.id); // Only for id 3
                  }}
                  onMouseLeave={() => {
                    if (edu.id === 3) setHoveredId(null); // Only for id 3
                  }}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-blue-400">{edu.years}</p>
                      </div>
                    </div>
                    {/* Show button only for id 3 */}
                    {edu.id !== 1 && edu.id !== 2 && (
                      <button
                        onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronDown
                          className={`w-6 h-6 transform transition-transform ${expandedId === edu.id ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.description}</p>
                    <div className="mt-2 inline-flex items-center bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      GPA: {edu.gpa}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === edu.id || (hoveredId === 3 && edu.id === 3) ? ( // Adjust condition for id 3
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Courses */}
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                            Key Courses
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            {edu.courses.map((course) => (
                              <div
                                key={course}
                                className="bg-gray-700/50 px-3 py-2 rounded-lg text-sm text-gray-300"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        {edu.projects && (
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3 flex items-center">
                              <FileText className="w-5 h-5 mr-2 text-blue-400" />
                              Notable Projects
                            </h5>
                            <div className="space-y-3">
                              {edu.projects.map((project) => (
                                <div
                                  key={project.title}
                                  className="bg-gray-700/50 p-3 rounded-lg"
                                >
                                  <div className="flex justify-between items-start">
                                    <h6 className="text-white font-medium">{project.title}</h6>
                                    {project.link && (
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {project.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        {edu.achievements && (
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-blue-400" />
                              Achievements
                            </h5>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement) => (
                                <div
                                  key={achievement}
                                  className="flex items-center text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Research Papers */}
                        {edu.papers && (
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3 flex items-center">
                              <Users className="w-5 h-5 mr-2 text-blue-400" />
                              Research Papers
                            </h5>
                            <div className="space-y-3">
                              {edu.papers.map((paper) => (
                                <div
                                  key={paper.title}
                                  className="bg-gray-700/50 p-3 rounded-lg"
                                >
                                  <div className="flex justify-between items-start">
                                    <h6 className="text-white font-medium">{paper.title}</h6>
                                    <a
                                      href={paper.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-400 hover:text-blue-300"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {paper.abstract}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Download CV Button */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full CV
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Education;
