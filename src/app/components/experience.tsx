import React from 'react'

export default function Experience() {
    return (
        <div className='py-4 mt-10' id='experience'>
            <div className='flex-row gap-2 items-center text-gray-50 mb-3'>
                <h2 className='text-2xl font-bold'>Experiência profissional</h2>
            </div>
            <div className='w-3/4 flex gap-4'>
                <div className='h-[72px] w-[72px]'>
                    <img className='lg:h-full lg:w-full rounded-lg ' loading='lazy' src='/assets/sicoob.png' />
                </div>
                <div className=''>
                    <h2 className='font-bold text-lg align-middle'>Sicoob Credimepi <span className='text-sm font-normal bg-slate-600 px-1 text-gray-150 rounded-sm'>Agosto/2022 - Atual</span></h2>
                    <h3>Desenvolvedor fullstack</h3>
                    <h4 className='font-bold'>Tecnologias: <span className='font-normal'>Laravel, MySQL, Livewire, Bootstrap</span></h4>
                </div>
            </div>
        </div>
    )
}
