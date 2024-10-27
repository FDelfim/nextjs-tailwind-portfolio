import React from 'react'

interface ExperienceProps {
    companyLogo: string;
    company: string;
    role: string;
    technologies: string[];
    startDate: string;
    endDate: string;
}


export default function Experience({companyLogo, company, role, technologies, startDate, endDate}: ExperienceProps) {
  return (
    <div className='w-3/4 flex gap-4'>
        <div className='h-[72px] w-[72px]'>
            <img className='lg:h-full lg:w-full rounded-lg ' loading='lazy' src={companyLogo} />
        </div>
        <div className=''>
            <h2 className='font-bold text-lg align-middle'>{company} <span className='text-sm font-normal bg-slate-600 px-1 text-gray-150 rounded-sm'>{startDate} - {endDate}</span></h2>
            <h3>{role}</h3>
            <h4 className='font-bold'>Tecnologias: <span className='font-normal'>{
                technologies.map((tech, index) => {
                    return <span key={index}>{tech}{index < technologies.length - 1 ? ', ' : ''}</span>
                })
            }</span></h4>
        </div>
    </div>
  )
}
