import React from 'react'
import Experience from './ui/Experience'

export default function Experiences() {
    return (
        <div className='py-4 mt-10' id='experience'>
            <div className='flex-row gap-2 items-center text-gray-50 mb-3'>
                <h2 className='text-2xl font-bold'>Experiência profissional</h2>
            </div>
            <div className='h-full'>
                <Experience companyLogo='/assets/econodata.jpg' company='Econodata' role='Desenvolvedor fullstack' technologies={['Vue.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'Google Cloud', 'Azion']} startDate='Maio/2024' endDate='Atual' />
                <div className='px-[36px] py-2'>
                    <div className='hidden md:block h-[20px] w-1 bg-slate-600 rounded-sm'></div>
                </div>
                <Experience companyLogo='/assets/sicoob.png' company='Sicoob Credimepi' role='Desenvolvedor fullstack' technologies={['Laravel', 'MySQL', 'Livewire', 'Bootstrap', 'jQuery']} startDate='Junho/2023' endDate='Maio/2024' />
                <div className='px-[36px] py-2'>
                    <div className='hidden md:block h-[20px] w-1 bg-slate-600 rounded-sm'></div>
                </div>
                <Experience companyLogo='/assets/sicoob.png' company='Sicoob Credimepi' role='Estagiário em desenvolvimento fullstack' technologies={['Laravel', 'MySQL', 'Livewire', 'Bootstrap', 'jQuery']} startDate='Agosto/2022' endDate='Junho/2023' />
            </div>
        </div>
    )
}
