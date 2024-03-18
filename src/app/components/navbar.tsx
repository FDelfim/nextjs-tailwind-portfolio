'use client'

import React, { useEffect, useState } from 'react'

export default function Navbar() {

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className='sticky top-0 z-50'>
        <div className='flex justify-between items-center py-2 px-4 bg-transparent backdrop-filter backdrop-blur-lg'>
            <div className='flex gap-4 lg:gap-10 py-3 lg:px-40 items-center'>
                <a href='#home' className='text-gray-50'>Início</a>
                <a href='#projects' className='text-gray-50'>Projetos</a>
                <a href='#experience' className='text-gray-50'>Experiência</a>
                <a href='#contact' className='text-gray-50'>Contato</a>
            </div>
        </div>
    </nav>
  )
}
