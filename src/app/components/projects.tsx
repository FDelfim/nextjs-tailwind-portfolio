import React from 'react'
import Card from './ui/card'
import { Project } from '@/types/project';

export default function Projects() {
    const projects =
        [
            {
                title: 'FlexiFile',
                subtitle: 'Conversor de arquivos',
                description: 'Sistema desenvolvido para converter arquivos para diferentes formatos. Desenvolvido com NextJS, Flask-API, Redis Upstash. API hospedada na Oracle Cloud e Frontend na Vercel.',
                img: '/assets/flexifile.png',
                technologies: [
                    { name: 'NextJS', color: 'zinc' },
                    { name: 'TailwindCSS', color: 'cyan' },
                    { name: 'Flask', color: 'green' },
                    { name: 'Redis Upstash', color: 'red' },
                    { name: 'PM2', color: 'emerald' },
                    { name: 'Oracle Cloud', color: 'emerald' }
                ],
                author: [{ name: 'Felipe Delfim', url: '#home' }],
                app: 'https://flexifile.xyz/',
            },
            {
                title: 'QR Leitos',
                subtitle: 'Aplicação para monitoramento de leitos hospitalares',
                description: '<p className="text-justify">Projeto desenvolvido na UFOP e premiado na II Semana do Conhecimento de João Monlevade/MG.</p><br>O projeto conta com uma aplicação Mobile desenvolvida com React Native e uma aplicação WEB desenvolvida com React.'+
                'Atualmente o projeto se encontra na fase de implantação, os testes em setores pilotos estão sendo realizados.',
                img: '/assets/qr_leitos.jpeg',
                repo: '',
                app: '',
                technologies: [
                    { name: 'Firebase', color: 'amber' },
                    { name: 'NextJS', color: 'zinc' },
                    { name: 'Chakra UI', color: 'emerald' },
                    { name: 'ReactNative', color: 'teal'},
                    { name: 'NextAuth', color: 'indigo' }
                ],
                author: [
                    { name: 'Felipe Delfim', url: '#home'},
                    { name: 'Henrique Malvar', url: 'https://portfolio-henriquemalvar.vercel.app/'}
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
                ],
                author: [{ name: 'Felipe Delfim', url: '#home' }]
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
                ],
                author: [{ name: 'Felipe Delfim', url: '#home' }]
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
                    <div className='flex flex-wrap justify-center'>
                        {projects.map((project, index) => (
                            <div key={index} className='py-2 w-full md:w-1/2 px-2'>
                                <Card {...project} />
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
