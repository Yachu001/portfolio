import { span } from 'framer-motion/client'
import React from 'react'

const ProjectCard = ({title,description,image,tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer'>
        <img className='w-full h-60 object-cover' 
        src={image} alt="" />
        <div className="p-6">
            <h3 className='text-2xl md:text-3xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4 text-xl md:text-2xl'>{description}</p>
            <div className="flex flex-wrap gap-2 mb-4 text-lg md:text-2xl">
                {
                    tech.map((item,index) =>(
                        <span className='px-3 py-1 bg-dark-400 rounded-full ' key={index}>
                            {item}
                        </span>
                    ))
                }
            </div>
            <div className="flex gap-2 text-xl md:text-2xl">
                <a className=' flex-2 xl:flex-1 flex text-center items-center justify-center  px-4 py-2 bg-purple rounded-xl font-medium hover:bg-purple-700 transition duration-300' href="#">Live Demo</a>
                <a className='flex-1 flex text-center items-center justify-center px-4 py-2 border border-purple rounded-xl font-medium hover:bg-purple/20 transition duration-300' href="#">Code</a>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard