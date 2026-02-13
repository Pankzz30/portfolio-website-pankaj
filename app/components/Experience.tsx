'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white/50 dark:bg-slate-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {/* AI Engineer Intern */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-start gap-8 pb-12"
            >
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              
              <div className="flex-1 card hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      AI Engineer Intern
                    </h3>
                    <p className="text-primary dark:text-accent font-semibold mb-2">
                      Adosolve Infotech Pvt Ltd, Pune
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar size={16} />
                      <span>June 2025 - December 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin size={16} />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed AI-driven features for intelligent automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated AI models with backend using REST APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Converted business requirements into scalable AI solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Worked on cloud deployment concepts and basic MLOps</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['AI/ML', 'REST APIs', 'Cloud Deployment', 'MLOps', 'Python'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Android Developer Intern */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-start gap-8"
            >
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              
              <div className="flex-1 card hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      Android Developer Trainee
                    </h3>
                    <p className="text-primary dark:text-accent font-semibold mb-2">
                      Mountreach Solutions Pvt Ltd, Amravati
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar size={16} />
                      <span>July 2022 - August 2022</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin size={16} />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed Android applications using Android SDK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed responsive UI with XML & Material Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented REST API integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimized app performance and secure authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Used Git & GitHub for collaboration</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Android SDK', 'Java', 'XML', 'Material Design', 'REST APIs', 'Git'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience