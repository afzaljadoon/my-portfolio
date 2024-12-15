import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

    return (
      <div className='fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-md z-50'>
          <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20 font-serif'>

              <h2>Mir Afzal khan</h2>

              <ul className='hidden md:flex gap-12 z-10 font-serif cursor-pointer'>
                  {/* Adding underline effect */}
                  <li className="hover:border-b-2 hover:border-gray-400 transition-all duration-300">
                      <Link to="skills" smooth={true} offset={50} duration={500}>
                          SKILLS
                      </Link>
                  </li>
                  <li className="hover:border-b-2 hover:border-gray-400 transition-all duration-300">
                      <Link to="portfolio" smooth={true} offset={50} duration={500}>
                          PROJECTS
                      </Link>
                  </li>
                  <li className="hover:border-b-2 hover:border-gray-400 transition-all duration-300">
                      <Link to="contact" smooth={true} offset={50} duration={500}>
                          CONTACT
                      </Link>
                  </li>
              </ul>

              <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                  {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
              </div>

              <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
              >
                  <ul className='font-semibold text-4xl space-y-8 mt-24 text-center font-serif'>
                      <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>Skills</Link></li>
                      <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Projects</Link></li>
                      <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                  </ul>
              </motion.div>
          </div>
      </div>
    )
}

export default Navbar;