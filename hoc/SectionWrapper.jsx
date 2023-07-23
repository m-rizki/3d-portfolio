// consider to use server components : remove use client
'use client'

import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView={`show`}
        viewport={{ once: true, amount: 0.25 }}
        className='padding-custom max-w-7xl mx-auto relative z-0'
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }
}

export default SectionWrapper
