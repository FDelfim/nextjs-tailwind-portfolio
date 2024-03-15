import React from 'react'
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';
import { Project } from '@/types/project';
import Chip from './chip';

export default function Card(props: Project) {
    const { img, title, technologies, subtitle, description, app, repo, info } = props;

    return (
        <div className='flex flex-col lg:flex-row h-full w-full'>
            <div className='relative w-full h-24 lg:h-full lg:w-1/3 flex justify-center'>
                <img className='absolute lg:h-full object-cover lg:w-full rounded-lg h-[135px]' loading='lazy' src={img} alt={title} />
            </div>
            <div className='flex flex-col p-6 mt-5 border-slate-500 rounded-xl lg:rounded-r-xl bg-slate-800 lg:my-2 lg:w-2/3'>
                <div>
                    <div>
                        <h2 className='text-2xl text-yellow-500 font-bold font-sans'>{title}</h2>
                    </div>
                    <h2 className='text-sm mt-1 font-light'>{subtitle}</h2>
                    <span className='mt-3 text-sm'  dangerouslySetInnerHTML={{ __html: description }}></span>
                </div>
                <div className='py-2 flex flex-wrap justify-center gap-4'>
                    {
                        technologies?.map((tech) => {
                            return(
                                <div key={tech.name}>
                                    <Chip text={tech.name} color={tech.color} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className='flex justify-end gap-2 mt-5'>
                    {app && <Link href={app} target='_blank' className='bg-blue-700 text-white p-1 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out'><CiGlobe size={30} /></Link>}
                    {repo && <Link href={repo} target='_blank' className='bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600 transition-all duration-300 ease-in-out'><FaGithub size={30} /></Link>}
                    {info && <button className='bg-white p-1 rounded-md text-slate-700 hover:bg-gray-200 transition-all duration-300 ease-in-out'><FaInfoCircle size={30} /></button>}
                </div>
            </div>
        </div>
    );
}
