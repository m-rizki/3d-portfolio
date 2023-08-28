'use client'

import { SectionWrapper } from '@/hoc'
import { otherTechnologies } from '@/constants'

import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import Image from 'next/image'

const OtherTechCard = ({ index, icon, title }) => {
  return (
    <Tilt className='w-28 h-28'>
      <motion.div
        variants={fadeIn('right', 'spring', index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-full shadow-card select-none'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-white rounded-full py-5 flex justify-evenly items-center flex-col'
        >
          <Image src={icon} className='w-16 h-16 object-contain' title={title} alt={title} />
        </div>
      </motion.div>
    </Tilt>
  )
}

const OtherTech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='my-7'>
        <p className='section-sub-text'>My Other Tools</p>
        <h2 className={`section-head-text`}>Other Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm continuously exploring and learning new tools to stay
        up-to-date with the ever-evolving web development landscape.
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {otherTechnologies.map((technology) => (
          <OtherTechCard
            icon={technology.icon}
            key={technology.name}
            title={technology.name}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(OtherTech, '')
