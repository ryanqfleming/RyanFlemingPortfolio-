import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const header = () => {
  return (
      <header className='flex bg-gray-900 h-11 justify-between text-xl p-2 text-teal-500'>
          <div className='links flex-row hidden lg:flex justify-between w-1/2 md:w-1/6 ml-2'>
              <a href="#">About</a>
              <a href="#">Contact</a>
          </div>
          <div className='linkMenu flex lg:hidden ml-2'>
              <a href="#"><GiHamburgerMenu /></a>
          </div>
          <div className='social flex row w-1/4 md:w-1/12 mr-2 justify-between transition-all'>
              <a href="#"><BsLinkedin /></a>
              <a href="#"><BsGithub/></a>
          </div>
      </header>
  )
}

export default header