import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <motion.div
        initial={{ opacity:0, y:50}}
        whileInView={{ opacity:1, y:0}}
        transition={{ duration:.7, ease:'easeOut'}}
        viewport={{ once:false, amount:0.1}}
        id='contact'
        className='py-20 bg-dark-200'
        >
            <div className="container mx-auto px-6 ">
                <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>Get in 
                    <span className='text-purple'> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-4xl mx-auto text-xl md:text-3xl mb-16 '>Have a Project in mind or want to collaborate? Let's talk!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-9xl mx-auto">
                    <div className="">
                        <form action="" className='space-y-6'>
                            <div className="text-2xl">
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <div className="text-xl">
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input type="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <div className="text-xl">
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea type="text" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <button type='submit' className='text-xl w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                                Send
                            </button>

                        </form>
                    </div>
                    {/* Contact info section */}
                    <div className="space-y-11 text-2xl">
                        <div className="flex items-start">
                            <div className="text-purple text-4xl mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="">
                                <h3 className='text-3xl font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Gudalur, India</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-purple text-4xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div className="">
                                <h3 className='text-3xl font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>yahyatp01@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-purple text-4xl mr-4">
                                <FaPhone />
                            </div>
                            <div className="">
                                <h3 className='text-3xl font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 6282188851</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className='text-4xl font-semibold mb-7'>Follow Me</h3>
                            <div className="flex space-x-4 ">
                                <a href="https://github.com/Yachu001" target='blank' className='w-15 h-15 rounded-full bg-dark-300 flex items-center justify-center text-black
                                 hover:bg-black hover:text-white transition duration-300 '>
                                    <FaGithub />
                                 </a>
                                <a href="https://www.linkedin.com/in/yahya-tp/" target='blank' className='w-15 h-15 rounded-full bg-dark-300 flex items-center justify-center text-blue
                                 hover:bg-blue hover:text-white transition duration-300 '>
                                    <FaLinkedin />
                                 </a>
                                <a href="mailto:yahyatp01@gmail.com" target='blank' className='w-15 h-15 rounded-full bg-dark-300 flex items-center justify-center text-white
                                 hover:bg-white hover:text-black transition duration-300 '>
                                    <FaEnvelope />
                                 </a>
                                <a href="https://wa.me/+916282188851" target='blank' className='w-15 h-15 rounded-full bg-dark-300 flex items-center justify-center text-green-400
                                 hover:bg-green-400 hover:text-white transition duration-300 '>
                                    <FaWhatsapp />
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
    </motion.div>
  )
}

export default Contact