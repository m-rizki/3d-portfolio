'use client'

import { SectionWrapper } from '@/hoc'
import { BallCanvas } from './canvas'
import { technologies } from '@/constants'

import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='my-7'>
        <p className='section-sub-text'>My Tools</p>
        <h2 className={`section-head-text`}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        These technologies form the foundation of my web development projects,
        enabling me to deliver high-quality, modern, and user-centric
        applications. I'm continuously exploring and learning new tools to stay
        up-to-date with the ever-evolving web development landscape.
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon.src} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
