import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.avif'
import { aboutInfo } from '../assets/assets'

function About() {
  return (
    <motion.div 
    initial={{ opacity:0, y:50}}
    whileInView={{ opacity:1, y:0}}
    transition={{ duration:0.6, ease:'easeOut'}}
    viewport={{ once:true}} 
    id='about'
    className='py-20 bg-dark-200'>
        <div className="container mx-auto px-6">

            <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>About 
                <span className='text-purple'>Me</span></h2>
            <p className='text-gray-400 text-xl md:text-3xl text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

            {/* Imge and content section */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* image */}
                <div className="lg:w-1/2 rounded-2xl overflow-hidden">
                    <motion.img 
                        initial={{ opacity:0, y:50}}
                        whileInView={{ opacity:1, y:0}}
                        transition={{ duration:0.9, ease:'easeOut'}}
                        viewport={{ once:false, amount:0.2}} 
                        className='w-full h-full object-cover'
                    src={profile} alt="" />
                </div>
                {/* content */}
                <motion.div className="lg:w-1/2"
                initial={{ opacity:0, y:50}}
                whileInView={{ opacity:1, y:0}}
                transition={{ duration:0.9, ease:'easeOut'}}
                viewport={{ once:false, amount:0.2}}
                 >
                    <div className="rounded-2xl p-8">
                        <h3 className='text-4xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6 text-xl'>
                            I'm a passionate full-stack developer with over yeears of experience creating digital solutions
                            for business around the world.  My Journey started with basic html /css websites ans has evolved 
                            into building complex web applications with modern frameworks.
                        </p>
                        <p className='text-gray-300 mb-6 text-xl'>
                            I'm a passionate full-stack developer with over yeears of experience creating digital solutions
                            for business around the world.  My Journey started with basic html /css websites ans has evolved 
                            into building complex web applications with modern frameworks.
                        </p>
                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {
                                aboutInfo.map((data,index)=>(
                                    <div 
                                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                    key={index}>
                                        <div className="text-purple text-4xl mb-4">
                                            <data.icon />
                                        </div>
                                        <h3 className='text-2xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400 text-xl'>{data.description}</p>
                                    </div>
                                ))

                            }
                        </div>
                        
                    </div>
                </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default About