'use client'

import { motion } from 'framer-motion'

import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto padding-custom-x flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`hero-head-text text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rizki</span>
          </h1>
          <p className={`hero-sub-text mt-2 text-white-100`}>
            I develop user interfaces and <br className='sm:block hidden' /> web
            applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about' className='flex items-center gap-4 bg-tertiary py-2 px-4 rounded-xl'>
          <div className='w-[30px] h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
          <span>scroll down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
