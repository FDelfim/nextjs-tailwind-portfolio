import React from 'react'
import Card from './ui/card'
import { FaProjectDiagram } from 'react-icons/fa';
import { Project } from '@/types/project';

export default function Projects() {
    const projects =
        [
            {
                title: 'QR Leitos',
                subtitle: 'Aplicação para monitoramento de leitos hospitalares',
                description: 'lorem ipsum',
                img: 'https://via.placeholder.com/150',
                repo: '',
                app: '',
                technologies: [
                    { name: 'Firebase', color: 'amber' },
                    { name: 'NextJS', color: 'zinc' },
                    { name: 'Chakra UI', color: 'emerald' }
                ]
            },
            {
                title: 'Rs-sp',
                subtitle: 'Escala de resiliência psicológica no espote',
                description: 'lorem ipsum',
                repo: 'https://github.com/FDelfim/rs-sp',
                app: 'https://rs-sp.vercel.app/',
                img: '/assets/qr-leitos.jpg',
                technologies: [
                    { name: 'Firebase', color: 'amber' },
                    { name: 'NextJS', color: 'zinc'},
                    { name: 'Chakra UI', color: 'emerald' },
                    { name: 'NextAuth', color: 'indigo' }
                ]
            }
        ] as Project[]

    return (
        <>
            {projects &&
                <>
                    <div className='flex gap-2 items-center text-yellow-400 mb-3'>
                        <h1 className='text-2xl font-bold'>Projetos</h1>
                    </div>
                    <div className='m-2 flex flex-wrap justify-between'>
                        {projects.map((project, index) => (
                            <div key={index} className='lg:w-1/2 py-2 lg:px-2 w-full md:w-full'>
                                <Card {...project} />
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}
