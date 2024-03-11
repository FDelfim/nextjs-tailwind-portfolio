import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from 'react-icons/ci';

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    app?: string;
    repo: string;
}

export default function Card(props: CardProps) {
    return (
        <div className='flex w-[500px]'>
            <div className='flex-none w-1/3 relative'>
                <img className='absolute inset-0 w-full h-full object-cover rounded-lg' loading='lazy' src={props.img} alt={props.title} />
            </div>
            <div className='flex flex-col p-6 border-slate-500 rounded-r-xl bg-slate-800 my-2'>
                <div>
                    <h1 className='text-2xl text-yellow-500 font-bold font-sans'>{props.title}</h1>
                    <h2 className='text-sm mt-1 font-light'>{props.subtitle}</h2>
                    <p className='mt-3'>{props.description}</p>
                </div>
                <div className='flex justify-end gap-2 mt-5'>
                    {
                        props.app && 
                        <>
                            <button className='bg-blue-700 text-white p-1 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out'><CiGlobe size={30}/></button>
                        </>
                    }
                    {
                        props.repo &&
                        <>
                            <button className='bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600 transition-all duration-300 ease-in-out'><FaGithub size={30}/></button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
