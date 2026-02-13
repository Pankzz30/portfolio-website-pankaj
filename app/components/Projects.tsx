'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Yatri AI - AI-Based Trip Planner',
      description: 'Built an AI-powered trip planner that generates personalized itineraries based on user preferences, budget, and constraints. Integrated LLM APIs and Google Maps for intelligent recommendations.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'Express', 'Gemini API', 'Google Maps API'],
      github: 'https://github.com/Pankzz30',
      demo: null,
      category: 'AI & Full Stack',
    },
    {
      title: 'CI/CD Pipeline for Cloud Application',
      description: 'Designed an automated CI/CD pipeline that builds, tests, creates Docker images, and deploys applications securely to AWS EC2 using SSH-based automation.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      technologies: ['AWS EC2', 'GitHub Actions', 'Docker', 'Linux', 'SSH'],
      github: 'https://github.com/Pankzz30',
      demo: null,
      category: 'Cloud & DevOps',
    },
    {
      title: 'Gesture Controlled Mouse Using Machine Learning',
      description: 'Developed a real-time gesture recognition system that enables touchless computer interaction using webcam-based hand tracking.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['Python', 'MediaPipe', 'OpenCV', 'Machine Learning'],
      github: 'https://github.com/Pankzz30',
      demo: null,
      category: 'Machine Learning',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-white/50 dark:bg-slate-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work in cloud computing, web development, and machine learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Pankzz30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects