'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white"
            >
              Cloud & AI Engineer | Building{' '}
              <span className="text-primary dark:text-accent">Intelligent Scalable Systems</span>
            </motion.h1>

            <div className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 h-16">
              <TypeAnimation
                sequence={[
                  'B.Tech Cloud Computing Student',
                  2000,
                  'AI Engineer Intern',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'AWS Cloud Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
            >
              Detail-oriented Cloud Computing undergraduate with hands-on experience in AI-driven systems, 
              full-stack development, and AWS-based cloud solutions. Passionate about building scalable, 
              production-grade applications.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-7066427828</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>pankajkoli3005@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Pankaj koli_CV.pdf"
                download="Pankaj Koli_CV.pdf"
                className="btn-secondary"
              >
                Download Resume
              </motion.a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Pankzz30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/pankaj-koli-cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/Profile_Photo.jpeg"
                alt="Pankaj Pramod Koli"
                width={320}
                height={320}
                className="relative z-10 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero