"use client"
import Logo from '/public/logo.png'
import FuturaEd from '/public/FuturaEd.svg'
import Image from 'next/image'
import { useState } from 'react'


const Header = () => {

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white bg-black py-6 px-4 absolute w-full top-0 z-20 border-b border-gray-500">
      <div className="relative container mx-auto flex items-center justify-between">

        <a href={"/"} className='inline-flex gap-2'>
          <Image src={Logo} width={30} />
          <span className='text-white text-6xl'><Image src={FuturaEd} /></span>
        </a>

        <ul className="hidden lg:flex space-x-12">
          <a href='#about' className='hover:scale-110 duration-100 text-white'><li>About</li></a>
          <a href='/speakers' className='hover:scale-110 duration-100 text-white'><li>Speakers</li></a>
          <a href='/features' className='hover:scale-110 duration-100 text-white'><li>Features</li></a>
        </ul>



        <div className="hidden lg:flex items-center">
          <div className="hidden md:flex gap-6">
            <a className='bg-[#E8C308] hover:bg-[#f3da5d] hover:scale-105 duration-700 py-3.5 px-3' href=''><button>Become A Sponsor</button></a>

            <a href='' className='bg-white text-black hover:bg-[#f0f0f0] hover:scale-105 duration-700 py-3.5 px-3'><button>Become A Speaker</button></a>
          </div>
        </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#101010] h-screen px-4 pb-6">
          <ul className="flex flex-col mt-4 py-12 space-y-2 ">
            <li><a href="#about" className="block py-2 px-4 hover:bg-black">About</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-black">Speakers</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-black">Features</a></li>
          </ul>
          <div className="mt-4 text-center">
            <div className="flex flex-col md:hidden gap-3">
              <a className='bg-[#E8C308] hover:bg-[#f3da5d] hover:scale-105 duration-700 py-3.5 px-3' href=''><button>Become A Sponsor</button></a>

              <a href='' className='bg-white text-black hover:bg-[#f0f0f0] hover:scale-105 duration-700 py-3.5 px-3'><button>Become A Speaker</button></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header