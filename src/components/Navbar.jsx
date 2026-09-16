import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar';

const Navbar = () => {
  return (
    <div>
      <header className='bg-gradient-to-b from black/60 to-transparent fixed w-full z-30'>
         <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
            <Link to="/" className='text-2xl font-bold'>MyNetflix</Link>
            <div className='flex items-center gap-4'>
                <nav className='hidden md:flex gap-4 text-sm'>
                    <a href='#' className='hover:underline'>
                        Home
                    </a>
                    <a href='#' className='hover:underline'>
                        TV Shows
                    </a>
                    <a href='#' className='hover:underline'>
                        Movies
                    </a>
                </nav>
                <Searchbar/> 
            </div>
         </div>
      </header>
    </div>
  )
}

export default Navbar
