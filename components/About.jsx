'use client'

import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image src={icon} alt={title} className='w-16 h-16 object-contain'/>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <p className='section-sub-text'>Introduction</p>
        <h2 className='section-head-text'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React and Next.Js. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About
