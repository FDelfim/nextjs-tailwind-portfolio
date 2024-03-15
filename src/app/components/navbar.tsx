import React from 'react'

export default function Navbar() {
  return (
    <nav className='sticky top-0'>
        <div className='flex justify-between items-center py-2 px-4 bg-transparent backdrop-filter backdrop-blur-lg'>
            <div className='flex gap-4 lg:gap-10 py-3 lg:px-40 items-center'>
                <a href='#' className='text-gray-50'>Início</a>
                <a href='#' className='text-gray-50'>Projetos</a>
                <a href='#' className='text-gray-50'>Sobre</a>
                <a href='#' className='text-gray-50'>Contato</a>
            </div>
        </div>
    </nav>
  )
}
