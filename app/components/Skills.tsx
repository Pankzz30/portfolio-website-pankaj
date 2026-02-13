'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Database, Globe, Server, Smartphone, Cpu, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code size={24} />,
      skills: ['Java', 'C++', 'Python', 'JavaScript'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Java'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cloud',
      icon: <Cloud size={24} />,
      skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC', 'CloudWatch'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'DevOps',
      icon: <GitBranch size={24} />,
      skills: ['Docker', 'GitHub Actions', 'Linux', 'Git'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MySQL', 'MongoDB', 'Database Design'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Animated background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'JavaScript/TypeScript', level: 85 },
              { skill: 'React.js/Next.js', level: 80 },
              { skill: 'Node.js/Express.js', level: 75 },
              { skill: 'AWS Cloud Services', level: 70 },
              { skill: 'Java Programming', level: 85 },
              { skill: 'Database Management', level: 75 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-primary dark:text-accent font-bold">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills