'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Gesture Controlled Mouse',
      description: 'Uses OpenCV & ML for touchless computer interaction. Built with Python and computer vision algorithms for real-time hand gesture recognition.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/Pankzz30',
      demo: null,
      category: 'Machine Learning',
    },
    {
      title: 'Static Website Hosting on AWS S3',
      description: 'Hosted a static website using AWS S3, CloudFront, and Route53. Implemented CI/CD pipeline for automated deployments.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      technologies: ['AWS S3', 'CloudFront', 'Route53', 'CI/CD'],
      github: 'https://github.com/Pankzz30',
      demo: '#',
      category: 'Cloud Computing',
    },
    {
      title: 'Music Player Application',
      description: 'Android app for audio streaming and playlist management. Features include custom UI, SQLite database, and MediaPlayer API integration.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      technologies: ['Android Studio', 'Java', 'SQLite', 'MediaPlayer API'],
      github: 'https://github.com/Pankzz30',
      demo: null,
      category: 'Mobile Development',
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
              whileHover={{ y: -10 }}
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