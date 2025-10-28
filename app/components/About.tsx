'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, BookOpen, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const education = [
    {
      institution: 'MIT School of Computing, MIT-ADT University',
      degree: 'B.Tech CSE - Cloud Computing',
      period: '2022–2026',
      grade: 'CGPA: 7.0',
    },
    {
      institution: 'Government Polytechnic, Murtizapur',
      degree: 'Diploma in Information Technology',
      period: '2020–2023',
      grade: '78.56%',
    },
    {
      institution: '10th Grade',
      degree: 'Secondary Education',
      period: '2020',
      grade: '89.60%',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white/50 dark:bg-slate-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
            Enthusiastic Cloud Computing student with a strong foundation in Java, C/C++, 
            and web technologies. Skilled in AWS (EC2, S3, IAM, CloudWatch), React, Node.js, 
            Express.js, and MySQL.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Career Goal</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              To work as a Cloud Engineer or Full Stack Developer building secure, scalable applications 
              that solve real-world problems using modern technologies.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Full Stack Developer_Pankaj Koli.pdf"
              download="Pankaj_Koli_Resume.pdf"
              className="inline-flex items-center gap-2 btn-primary"
            >
              📄 Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
              <GraduationCap className="text-primary dark:text-accent" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group relative overflow-hidden"
              >
                <div className="relative h-24 mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
                  <Image
                    src={index === 0 ? "/MIT ADT.jpg" : index === 1 ? "/Poly.webp" : "/School.jpg"}
                    alt={edu.institution}
                    width={300}
                    height={96}
                    className="w-full h-full opacity-60 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <GraduationCap className="absolute top-2 right-2 text-white" size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">
                  {edu.institution}
                </h4>
                <p className="text-primary dark:text-accent font-medium mb-2 text-sm">
                  {edu.degree}
                </p>
                <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400">
                  <span>{edu.period}</span>
                  <span className="font-bold text-accent">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 dark:bg-primary/10 rounded-lg">
              <Award className="text-accent dark:text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'AWS Cloud Technical Essentials', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=300&h=200&fit=crop', color: 'from-orange-500 to-yellow-500' },
              { name: 'Full Stack Development', logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop', color: 'from-blue-500 to-purple-500' },
              { name: 'Android Development Training', logo: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=300&h=200&fit=crop', color: 'from-green-500 to-teal-500' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group relative overflow-hidden"
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-80`}></div>
                  <Award className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={32} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm text-center">
                  {cert.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publications Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <BookOpen className="text-green-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Publications</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="card bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-700 relative overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop"
                    alt="Research Publication"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg"></div>
                  <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Gesture Control Mouse Using Machine Learning
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Published in IJEAST (International Journal of Engineering and Advanced Science Technology) - May 2025
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Computer Vision
                    </span>
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

export default About