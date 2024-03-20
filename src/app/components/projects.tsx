import React from 'react'
import Card from './ui/card'
import { Project } from '@/types/project';

export default function Projects() {
    const projects =
        [
            {
                title: 'QR Leitos',
                subtitle: 'Aplicação para monitoramento de leitos hospitalares',
                description: '<p>Projeto desenvolvido na UFOP e premiado na II Semana do Conhecimento de João Monlevade/MG.</p><br><p>O projeto conta com uma aplicação Mobile desenvolvida com React Native e uma aplicação WEB desenvolvida com React.</p>',
                img: '/assets/qr_leitos.jpeg',
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
                description: 'Projeto desenvolvido como parte do meu Trabalho de Conclusão de Curso. Trata-se de um sistema para coleta de dados e classificação de usuários no aspecto de resiliência psicológica no esporte.',
                repo: 'https://github.com/FDelfim/rs-sp',
                app: 'https://rs-sp.vercel.app/',
                img: '/assets/rs-sp.jpg',
                technologies: [
                    { name: 'Firebase', color: 'amber' },
                    { name: 'NextJS', color: 'zinc'},
                    { name: 'Chakra UI', color: 'emerald' },
                    { name: 'NextAuth', color: 'indigo' }
                ]
            },
            {
                title: 'Portfolio',
                subtitle: 'Meu portfólio',
                description: 'Este projeto é o meu portfólio pessoal, desenvolvido com NextJS e TailwindCSS.',
                repo: 'https://github.com/FDelfim/nextjs-tailwind-portfolio', 
                img: '/assets/avatar.png',
                technologies: [
                    { name: 'NextJS', color: 'zinc' },
                    { name: 'TailwindCSS', color: 'cyan' },
                    { name: 'TypeScript', color: 'blue' }
                ]
            }
        ] as Project[]

    return (
        <div id='projects' className='py-4'>
            {projects &&
                <>
                    <div className='flex-row gap-2 items-center text-gray-50 mb-3'>
                        <h2 className='text-2xl font-bold'>Projetos</h2>
                        <p>Alguns projetos desenvolvidos por mim.</p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {projects.map((project, index) => (
                            <div key={index} className='py-2 w-full md:w-1/3'>
                                <Card {...project} />
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
