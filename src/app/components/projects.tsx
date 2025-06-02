'use client'

import React from 'react'
import Card from './ui/card'
import { Project } from '@/types/project';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Projects() {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true }) as Project[];

    return (
        <div id='projects' className='py-4'>
            <div className='flex-row gap-2 items-center text-gray-50 mb-3'>
                <h2 className='text-2xl font-bold'>{t('projects.title')}</h2>
                <p>{t('projects.subtitle')}</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {Array.isArray(projects) && projects.map((project, index) => (
                    <div key={index} className='py-2 w-full md:w-1/2 px-2'>
                        <Card {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}
