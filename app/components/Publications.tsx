'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'

const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Research work and publications in AI, machine learning, and computer vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 dark:border-accent/20">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white flex-shrink-0">
                <BookOpen size={32} />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Gesture-Based Virtual Mouse System
                  </h3>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>April 2025</span>
                    </div>
                    <span className="text-primary dark:text-accent font-semibold">
                      IJEAST (International Journal of Engineering and Advanced Science Technology)
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  This research paper presents an innovative approach to computer interaction through 
                  gesture-controlled mouse functionality using MediaPipe and OpenCV. The system utilizes 
                  real-time hand tracking for touchless computer navigation and control, implemented in Python.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Key Contributions:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built using MediaPipe & OpenCV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time hand tracking system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented in Python</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['MediaPipe', 'OpenCV', 'Computer Vision', 'Python', 'Hand Tracking'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center gap-2 btn-primary"
                  >
                    <ExternalLink size={16} />
                    Read Paper
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Pankzz30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-secondary"
                  >
                    <BookOpen size={16} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications