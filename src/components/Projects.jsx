import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
  return (
    <motion.div
    initial={{ opacity:0, y:50}}
    whileInView={{ opacity:1, y:0}}
    transition={{ duration:.7, ease:'easeOut'}}
    viewport={{ once:false, amount:0.1}} 
    id='projects'
    className='py-20 bg-dark-200'>
        <div className="container mx-auto px-6 ">
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>
                My <span className='text-purple'>Projects</span>
            </h2>
            <p className='text-gray-400 text-center text-xl md:text-3xl max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
                {/* Projects card */}
                {
                    projects.map((project,index) =>(
                        <ProjectCard key={index} {...project}/>
                    ))
                }
            </div>
            <div className="text-center mt-12 text-lg md:text-2xl">
                <a href="#" className='inline-flex items-center py-3 px-6 border border-purple rounded-xl font-medium  hover:bg-purple/20 
                transition duration-300'>
                    <span>View More Projects </span>
                    <FaArrowRight className='ml-4' />
                </a>
            </div>
            
        </div>

    </motion.div>
  )
}

export default Projects