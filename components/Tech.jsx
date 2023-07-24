'use client'

import { SectionWrapper } from '@/hoc'
import { BallCanvas } from './canvas'
import { technologies } from '@/constants'

import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='my-7'>
        <p className='section-sub-text'>My Tools</p>
        <h2 className={`section-head-text`}>Technologies.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
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
