import React from 'react'
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';
import { Project, author } from '@/types/project';

export default function Card(props: Project) {
    const { img, title, technologies, subtitle, description, app, repo, info, author } = props;

    return (
        <div className='flex flex-col h-full w-full'>
            <div className='relative w-full flex justify-center'>
                <img className='relative object-cover aspect-w-1 aspect-h-1 rounded-lg w-1/3 mb-[-20px]' loading='lazy' src={img} alt={title} />
            </div>
            <div className='flex flex-col p-6 border-slate-500 rounded-xl bg-slate-800 h-full justify-between'>
                <div>
                    <div>
                        <h2 className='text-2xl text-yellow-500 font-bold font-sans'>{title}</h2>
                    </div>
                    <h2 className='text-sm mt-1 font-light'>{subtitle}</h2>
                    <span className='mt-3 text-sm' dangerouslySetInnerHTML={{ __html: description }}></span>
                </div>
                <div className='my-2 flex flex-wrap'>
                    <span className='flex ps-1'>
                        <span className='text-sm'>
                            <span className='text-sm font-bold'>Tecnologias: </span>
                            {
                                technologies?.map((tech, index) => {
                                    return (
                                        <>{tech.name}{index !== technologies.length - 1 ? ', ' : ''}</>
                                    );
                                })
                            }
                        </span>
                    </span>
                </div>
                <div>
                    <div className='mt-2'>
                        <b>Autores</b>
                        {
                            author.map((auth, index) => (
                                <div key={index}>
                                    <a className='text-blue-500 hover:underline' href={auth.url} target={auth.url !== '#home' ? "_blank" : ''}>{auth.name}</a>
                                </div>
                            ))
                        }
                    </div>
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
