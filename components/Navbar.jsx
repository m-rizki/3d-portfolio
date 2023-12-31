'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navLinks, socialMedia } from '@/constants'
import { logo, menu, close, github, linkedin } from '@/public/assets/images'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`padding-custom-x w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between item-center max-w-7xl mx-auto'>
        <Link
          href={`/`}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer md:block hidden'>
            Muhamad Rizki
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer my-auto`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div className='flex gap-4 mt-2'>
            <Image
              src={github}
              alt='github'
              className='w-7 h-7 object-contain cursor-pointer'
              onClick={() => window.open(socialMedia.githubLink, '_blank')}
            />
            <Image
              src={linkedin}
              alt='linkedin'
              className='w-7 h-7 object-contain cursor-pointer'
              onClick={() => window.open(socialMedia.linkedinLink, '_blank')}
            />
          </div>
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } fonr-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle((prev) => !prev)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <div className='flex gap-4 mt-2'>
                <Image
                  src={github}
                  alt='github'
                  className='w-7 h-7 object-contain cursor-pointer'
                  onClick={() => window.open(socialMedia.githubLink, '_blank')}
                />
                <Image
                  src={linkedin}
                  alt='linkedin'
                  className='w-7 h-7 object-contain cursor-pointer'
                  onClick={() =>
                    window.open(socialMedia.linkedinLink, '_blank')
                  }
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
