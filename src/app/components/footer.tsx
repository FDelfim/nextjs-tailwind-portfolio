'use client'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer() {
    const handleEmailClick = () => {
        navigator.clipboard.writeText('felipe.delfim@hotmail.com');
    };

    return (
        <footer className='w-full flex-col my-10' id='contact'>
            <div className='flex justify-center gap-5'>
                <button data-tooltip-target="tooltip-default" className='hover:text-blue-400 ease-in-out transition-all duration-300' onClick={handleEmailClick}><MdOutlineMail size={30}/></button>
                <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Copiar
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <Link className='hover:text-blue-400 ease-in-out transition-all duration-300' target='_blank' href='https://www.github.com/fdelfim'><BsGithub size={30}/></Link>
                <Link className='hover:text-blue-400 ease-in-out transition-all duration-300' target='_blank' href='https://www.linkedin.com/in/felipe-delfim-machado/'><BsLinkedin size={30}/></Link>
            </div>
            <div className='flex justify-center mt-2'>
                <p className='text-md'>© {new Date().getFullYear()} • Felipe Delfim</p>
            </div>
        </footer>
    );
}
