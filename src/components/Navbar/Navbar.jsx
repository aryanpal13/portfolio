import React, { useEffect, useState } from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

// Smooth Scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    // {id: "experience", label: "Experience"},
    {id: "work", label: "Projects"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Contact"},
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}> 
      <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec] text-2xl'>&lt;</span>
          <span className='text-white text-2xl'>Aryan</span>
          <span className='text-[#8245ec] text-2xl'>/</span>
          <span className='text-white text-2xl'>Pal</span>
          <span className='text-[#8245ec] text-2xl'>&gt;</span>
        </div>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <a
        href={`#${item.id}`}
        onClick={() => handleMenuItemClick(item.id)}
      >
        {item.label}
      </a>

              </li>
            ))}
        </ul>
        
        {/* Social Media Icons */}
        <div className='hidden md:flex space-x-4'>
          <a
            href='https://github.com/aryanpal13'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={34}/>
          </a>
          <a
            href='https://www.linkedin.com/in/aryan-pal-7a56382a4/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={34}/>
          </a>

        </div>

        {/* Mobile menu icons */}
        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer' 
              onClick={() => setIsOpen(false)}/>
              
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' 
              onClick={() => setIsOpen(true)} />
            )
          }

        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
          {menuItems.map((item) => (
            <li 
            key={item.id} 
            className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""

            }`}>
              <a
  href={`#${item.id}`}
  onClick={() => handleMenuItemClick(item.id)}
>
  {item.label}
</a>

            </li>
          ))}
            <div className='flex space-x-4'>
              <a
            href='https://github.com/aryanpal13'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white'
          >
            <FaGithub size={34}/>
          </a>
          <a
            href='https://www.linkedin.com/in/aryan-pal-7a56382a4/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white'
          >
            <FaLinkedin size={34}/>
          </a>
            </div>
          </ul>
        </div>
      )
      }
    </nav>
  )
}

export default Navbar