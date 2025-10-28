'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simple form submission simulation
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'pankajkoli3005@gmail.com',
      href: 'mailto:pankajkoli3005@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91-7066427828',
      href: 'tel:+917066427828',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      href: 'https://github.com/Pankzz30',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pankaj-koli-9a55b2327',
      color: 'hover:text-blue-600',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect. I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg text-primary dark:text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact